import { useState } from 'react';
import { useAppContext } from '../../context/state';

import styles from './styles.module.scss';

export function AddNoteComponent(id: any) {
    const { StateAddNote } = useAppContext();
    const [ AddNote, setAddNote ] = useState('');
    
    const addNoteCard = (e: any) => {
        StateAddNote(e, id.id, AddNote)
        setAddNote('');
    }

    return (
        <div
            className={styles.addNote}
        >
            <form className={styles.form}>
                <input type="text"
                    placeholder="Nota"
                    name="nota"
                    onChange={e => setAddNote(e.target.value)}
                    className={styles.inputAddNote}
                    value={AddNote} />
                <button
                    type="submit"
                    onClick={addNoteCard}
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}