import Head from 'next/head';
import { AddDocs } from '../../components/AddDocs';
import { GetDocs } from '../../components/GetDocs';
import { InfoBar } from '../../components/InfoBar';
import { BsRecordCircleFill } from 'react-icons/bs';

import styles from './styles.module.scss';

export default function Painel() {
    
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
                <div className={styles.showInfoBar}>
                    <InfoBar />
                </div>
            </section>
        </>
    )
}