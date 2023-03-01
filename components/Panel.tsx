import Link from 'next/link';
import React from 'react';
import styles from '../styles/Panel.module.css';
import { ThemeContext } from './Theme';
import currentFile from './Resume';

type PanelProps = {
    filename: string;
    data: Record<string, string>;
    handleButtonClick: (url: string) => void;
};

function Panel({ filename, data, handleButtonClick }: PanelProps) {
    const { mode } = React.useContext(ThemeContext)
    const theme = mode === "dark" ? styles.dark : "";
    return (
        <div className={`${styles.panel} ${theme}`}>
            <div className={styles.buttonContainer}>
                {Object.entries(data).map(([key, value]) => (
                    <button key={key} onClick={() => handleButtonClick(key)} className={styles.button}>
                        {key}
                    </button>
                ))}
            </div>
            <div className={styles.downloadContainer}>
                <Link href={data[filename]}>
                    <a className={styles.downloadButton} download>
                        Download
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Panel;
