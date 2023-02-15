import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
// import { Document, Page } from 'react-pdf';
import { Document, Page, pdfjs } from 'react-pdf';

import styles from '../styles/Papers.module.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { ThemeContext } from './Theme';
import Panel from './Panel';

// import { GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';
pdfjs.GlobalWorkerOptions.workerSrc = '//unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js';

// import pdfjs from 'react-pdf';
// // @ts-ignore
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

function Papers() {
    const ThirdYP = "https://raw.githubusercontent.com/Zhayu517/Reports-and-Presentations/main/3rd_Year_Project_Report.pdf";
    const LeaderF = "https://raw.githubusercontent.com/Zhayu517/Reports-and-Presentations/main/Leader%20Follower.pdf";
    const OptimizingMC = "https://raw.githubusercontent.com/Zhayu517/Reports-and-Presentations/main/Optimizing%20minimal%20counterexamples.pdf";
    const QuestionC = "https://raw.githubusercontent.com/Zhayu517/Reports-and-Presentations/main/Question%20Classifier.pdf";
    const SMATM = "https://raw.githubusercontent.com/Zhayu517/Reports-and-Presentations/main/SMA-Text-Mining.pdf";

    const ReportData = [
        ['Uni 3rd Year Project Report', ThirdYP],
        ['Leader Follower', LeaderF],
        ['Optimizing Minimal Counterexamples', OptimizingMC],
        ['Question Classifier', QuestionC],
        ['SMA Text Mining', SMATM],
    ];

    const { mode } = React.useContext(ThemeContext)
    const theme = mode === "dark" ? styles.dark : "";

    const [currentReport, setCurrentReport] = useState(ThirdYP);

    const handleButtonClick = (url: string) => {
        setCurrentReport(url);
    };

    return (
        <div>
        <Panel data={ReportData} handleButtonClick={handleButtonClick} />
        <Document file={currentReport} renderMode='svg' className={`${styles.main} ${theme}`} onLoadError={console.error}>
            <Page pageNumber={1} renderTextLayer={false} className={styles.page} onLoadError={console.error}/>
        </Document>
        </div>
    );
}

export default Papers;