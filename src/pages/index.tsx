import Head from 'next/head';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase'
import {collection, onSnapshot} from 'firebase/firestore';

import styles from './styles.module.scss';
import { Footer } from '../components/Footer';

interface funcionariosProps {
  id: string,
  image: string,
  nome: string,
  cargo: string,
}

export default function Home() {
  const databaseRef = collection(db, 'usuarios');
  const [cadastros, setCadastros] = useState<funcionariosProps[]>([]);
  

  useEffect(() => {
    onSnapshot(databaseRef, async usuarios => {

      let usuariosList = usuarios.docs.map(usuario => {
        return usuario.data() as funcionariosProps;
      });

      setCadastros(usuariosList) 
    } )
  }, [])
    
  return ( 
    <>
      <Head>
        <title>Inicio | DashBoard</title>
      </Head>
      <div className={styles.background}>
        <section className={styles.section}>
          {cadastros?.map((cadastro, i) => (
        
                <div key={i} className={styles.card}>
                    <div className={styles.content}>
                      <div className={styles.imgBx}><img src={cadastro.image} alt="img" />
                      </div>
                      <div className={styles.contentBx}>
                          <h3>
                            {cadastro.nome}
                          </h3>
                          <p>
                            {cadastro.cargo}
                          </p>
                          
                      </div>
                    </div>
                    <div className={styles.flags}>
                    </div>
                </div>)
        
          )}
        </section>
      </div>
      <Footer />
    </>
  )
}