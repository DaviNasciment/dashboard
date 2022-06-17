import { useState } from "react";
import { useAppContext } from "../../context/state";
import { AddNoteComponent } from "../AddNote";
import { BiNote } from "react-icons/bi";

import styles from "./styles.module.scss";

export function InfoBar() {
    const { employee } = useAppContext()
    const [ opennote, setOpenNote ] = useState('')

    const handleOpenNote = () => {
        if (opennote == '') {
            setOpenNote(styles.opennote)
        } else {
            setOpenNote('')
        }
    }
    
    return (
        <>
            
            
            <div className={styles.headerInfoBar}>
                <h2>Anotações</h2>
            </div>

            { employee ?
                <> 
                    <div className={styles.infoBar}>

                        <div className={styles.content}>
                            {employee ? <img src={employee?.image} alt="perfil" /> : ''}
                            <div className={styles.nomeEcargo}>
                                <h3>
                                    {employee?.nome}
                                </h3>
                                <p>
                                    {employee?.cargo}
                                </p>
                            </div>
                            <BiNote onClick={handleOpenNote}  />
                        </div>
                        <div
                            className={`${styles.note} ${opennote}`}>
                            <AddNoteComponent id={employee?.id} />
                        </div>
                        <p>
                            {employee?.nota}
                        </p>
                    </div>
                
                </>

                :   
                
                <div className={styles.descNoViewNote}>
                    <h2>Não há nota para visualizar</h2>
                    <p>Clique no nome de alguém para visualizar a sua nota.</p>
                </div>

            }
        </>
    )
}