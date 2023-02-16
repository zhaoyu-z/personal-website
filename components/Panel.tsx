import React from 'react';
import styles from '../styles/Panel.module.css';
import { ThemeContext } from './Theme';

type PanelProps = {
    data: string[][];
    handleButtonClick: (url: string) => void;
};

function Panel({ data, handleButtonClick }: PanelProps) {
    const { mode } = React.useContext(ThemeContext)
    const theme = mode === "dark" ? styles.dark : "";

    return (
        <div className={`${styles.panel} ${theme}`}>
            <div className={styles.buttonContainer}>
                {data.map((item) => (
                    <button key={item[0]} onClick={() => handleButtonClick(item[1])} className={styles.button}>
                        {item[0]}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Panel;
