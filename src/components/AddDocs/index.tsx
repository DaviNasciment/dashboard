import { useState } from "react";
import { MdLibraryAdd } from 'react-icons/md';
import { useAddCardContext } from "../../context/addContext";

import styles from "./styles.module.scss";

export function AddDocs() {    
    const [stylesEdit, setStylesEdit] = useState('')
    const [stylesEdit2, setStylesEdit2] = useState('')  
    
    const {formFileImg} = useAddCardContext()
    const {setNome, setCharge, name, charge} = useAddCardContext()
 

    function hadleclickeEdit() {

        if (stylesEdit == '') {
            setStylesEdit(styles.editDown)
            setStylesEdit2('')
        }
        if (stylesEdit !== '') {
            setStylesEdit2(styles.editUp)
            setStylesEdit('')
        }
    }

    return (
        <>
            <div className={styles.section}>
                <form onSubmit={formFileImg} className={ `${styles.form} ${stylesEdit} ${stylesEdit2}`}>

                    <input className={ styles.inputSendFiles} type="file" name="file" />

                    <div>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            onChange={e => setNome(e.target.value)}
                            value={name}
                            className={styles.inputAddDocs}/>
                        <input
                            type="text"
                            name="cargo"
                            placeholder="Cargo"
                            onChange={e => setCharge(e.target.value)}
                            value={charge}
                            className={styles.inputAddDocs}/>
                        <button type="submit">Adicionar</button>
                    </div>
                    
                </form>
                <div 
                    className={styles.addDocsEdit}
                    onClick={hadleclickeEdit}>
                    <MdLibraryAdd />
                </div>
                
            </div>
        </>
    )
}