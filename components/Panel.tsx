import Link from 'next/link';
import React from 'react';
import styles from '../styles/Panel.module.css';
import { ThemeContext } from './Theme';
import currentCV from './Resume';

type PanelProps = {
    data: Record<string, string>;
    handleButtonClick: (url: string) => void;
};

function Panel({ data, handleButtonClick }: PanelProps) {
    const { mode } = React.useContext(ThemeContext)
    const theme = mode === "dark" ? styles.dark : "";

    return (
        <div className={`${styles.panel} ${theme}`}>
            <div className={styles.buttonContainer}>
                {Object.entries(data).map(([key, value]) => (
                    <button key={key} onClick={() => handleButtonClick(value)} className={styles.button}>
                        {key}
                    </button>
                ))}
            </div>
            <div className={styles.downloadContainer}>
                <Link href="">
                    <a className={styles.downloadButton}>
                        Download
                    </a>
                </Link>
                <Link href="">
                    <a className={styles.downloadButton}>
                        Source
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Panel;
