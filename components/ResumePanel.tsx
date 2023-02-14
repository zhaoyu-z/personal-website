import React from 'react';
import styles from '../styles/ResumePanel.module.css';

type PanelProps = {
    data: string[][];
    handleButtonClick: (url: string) => void;
};

function Panel({ data, handleButtonClick }: PanelProps) {

  return (
    <div className={styles.panel}>
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
