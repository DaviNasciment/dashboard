import { db, storage } from "../../services/firebase";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useAppContext } from "../../context/state";
import { useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

import styles from "./styles.module.scss";

export interface funcionariosProps {
    id: string,
    id_file_name: string,
    image: string;
    nome: string,
    cargo: string,
    nota: string
}

export function GetDocs() {

    const { clickDoc } = useAppContext();

    const [cadastros, setCadastros] = useState<funcionariosProps[]>([]);
    const databaseRef = collection(db, 'usuarios');

    useEffect(() => {
        onSnapshot(databaseRef, async usuarios => {
    
          let usuariosList = usuarios.docs.map(usuario => {
            return usuario.data() as funcionariosProps;
          });
    
          setCadastros(usuariosList) 
        } )
    }, [])

    async function DeleteCard(id: string, id_file_name: string) {
        await deleteDoc(doc(db, "usuarios", id)); 
        
        const storageRef = ref(storage, id_file_name);
        // Delete the file
        deleteObject(storageRef).then(() => {
            // File deleted successfully
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    }

    return (
        <>  
            <div className={styles.titleCard}>
                <h1>
                    Funcionarios
                </h1>
            </div>
            <div className={styles.cardContainers}>
                {cadastros?.map((cadastro, i) => (
                    <>
                        <div key={i} className={styles.card}>
                            <img src={cadastro.image} alt="perfil" />
                            <div 
                                className={styles.nameAndCargo}
                                onClick={() => clickDoc(cadastro?.id)}>
                                <h3>
                                    {cadastro.nome}
                                </h3>
                                <p>
                                    {cadastro.cargo}
                                </p>
                            </div>
                            <div 
                                className={styles.deleteCard}
                                onClick={() => DeleteCard(cadastro?.id, cadastro?.id_file_name)}
                            >

                                <button type="button">
                                    <AiOutlineClose />
                                </button>
                            </div>
                        </div>
                        
                    </>  
                )
                
                )}
            </div>
        </>
    )
}