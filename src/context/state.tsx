import { createContext, Dispatch, FC, FormEvent, PropsWithChildren, SetStateAction, useContext } from 'react';

import { collection, onSnapshot, doc, setDoc, DocumentSnapshot, DocumentData } from "firebase/firestore";
import { useState } from "react";
import { db } from "../services/firebase";
import { funcionariosProps } from '../components/GetDocs';

const AppContext = createContext<IContext>({} as IContext);

interface IContext {
  employee: undefined | funcionariosProps;
  setEmployee?: Dispatch<SetStateAction<undefined | funcionariosProps>>;
  clickDoc: (id: string) => void;
  setFileName: (file: any) => void;
  StateAddNote: (e: FormEvent<HTMLFormElement>, nota: string, id: string) => void;
}

interface IAppWrapperProps {
  children: React.ReactNode;
}

export const AppWrapper :FC<IAppWrapperProps> = ({ children }) => {
  const [employee, setEmployee] = useState<undefined | funcionariosProps>();
  const databaseRef = collection(db, 'usuarios');

  
  const clickDoc = (id: string) => {
    onSnapshot(doc(databaseRef, id), (doc) => {
      let docData = doc?.data() as DocumentData;
      setEmployee(docData as funcionariosProps);
    });
  }


  const StateAddNote = async (e: FormEvent<HTMLFormElement>, id: string, nota: string) => {
    e.preventDefault()
    const cityRef = doc(databaseRef, id);
    setDoc(cityRef, { nota: nota }, { merge: true });
  }
  

  const setFileName = (file: string) => {
    const setNameFile = file;
    console.log(setNameFile);
  };


  return (
    <AppContext.Provider value={{clickDoc, employee, StateAddNote, setFileName}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}