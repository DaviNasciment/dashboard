import { createContext, useContext } from 'react';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db, storage } from "../services/firebase";
import { getDownloadURL, ref, uploadBytes} from "firebase/storage"

const AddCardContext = createContext();

export const AddCardProvider = ({ children }) => {
    const [name, setNome] = useState('');
    const [charge, setCharge] = useState('');

    const databaseRef = collection(db, 'usuarios');

    const addData = async (e) => {
        const file = e.target[0].files[0];
        
        if ( name && charge && file.name !== '' ) {
            const nome = name;
            const cargo = charge;
            
            let userAdded = await addDoc(databaseRef, {
                nome: nome,
                cargo: cargo,
                nota: ''
            })
            
            await updateDoc(doc(databaseRef, userAdded.id), {
              id : userAdded.id,
              image: 'https://gifimage.net/wp-content/uploads/2017/11/gif-carregando-8.gif',
              id_file_name: ''
            })
            const id = userAdded.id;

            await updateDoc(doc(databaseRef, id), { 
                image: await uploadFiles(file, id),
                id_file_name: `/${id}/${file.name}` 
            });
            
            setNome('');
            setCharge('');
        }
    }

    const formFileImg =(e) => {
        e.preventDefault();

        addData(e);
    };

    const uploadFiles = async (file, id) => {

        if (!file) return;
        
        const storageRef = ref(storage, `/${id}/${file.name}`);
        const uploadTask = await uploadBytes(storageRef, file);

        const url = await getDownloadURL(uploadTask.ref);
        return url;

    };

    return (
        <AddCardContext.Provider value={{formFileImg, setNome, setCharge, name, charge}}>
        {children}
        </AddCardContext.Provider>
    );
}

export function useAddCardContext() {
  return useContext(AddCardContext);
}