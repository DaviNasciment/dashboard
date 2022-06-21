import Head from 'next/head';
import { AddDocs } from '../components/AddDocs';
import { GetDocs } from '../components/GetDocs';
import { InfoBar } from '../components/InfoBar';
import { BsRecordCircleFill } from 'react-icons/bs';
import { AiOutlineLine } from 'react-icons/ai';

import styles from './styles.module.scss';
import { useState } from 'react';

export default function Painel() {
    const [ openNoteCard, setOpenNoteCard ] = useState('')

    const handleOpenNoteCard = () => {
        if (openNoteCard == '') {
            setOpenNoteCard(styles.openNoteCard)
        } else {
            setOpenNoteCard('')
        }
    }
    
    return (
        <>
            <Head>
                <title>Painel</title>
            </Head>
            <section className={styles.section}>
                <div className={styles.menuBar}>
                    <BsRecordCircleFill />
                </div>
                <div className={styles.container}>
                    <div className={styles.ShowInput}>
                        <AddDocs />
                    </div>
                    <GetDocs />
                </div>
                
                <div className={`${styles.showInfoBar} ${openNoteCard}`}>
                    <div 
                        onClick={handleOpenNoteCard} 
                        className={styles.line}
                    >
                        <AiOutlineLine />
                    </div>
                    <InfoBar />
                </div>
            </section>
        </>
    )
}