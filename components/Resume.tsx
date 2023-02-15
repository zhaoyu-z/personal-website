import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
// import { Document, Page } from 'react-pdf';
import { Document, Page, pdfjs } from 'react-pdf';

import styles from '../styles/Resume.module.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { ThemeContext } from './Theme';
import ResumePanel from './ResumePanel';

// import { GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';
pdfjs.GlobalWorkerOptions.workerSrc = '//unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js';

// import pdfjs from 'react-pdf';
// // @ts-ignore
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

function Resume() {

    const JavaCVURL = "https://raw.githubusercontent.com/Zhayu517/Resume/main/CV_Java/Zhaoyu%20Zhang%20CV.pdf";
    const PythonCVURL = "https://raw.githubusercontent.com/Zhayu517/Resume/main/CV_Python/Zhaoyu%20Zhang%20CV.pdf";

    const CVData = [
        ['Java CV', JavaCVURL],
        ['Python CV', PythonCVURL],
    ];

    const { mode } = React.useContext(ThemeContext)
    const theme = mode === "dark" ? styles.dark : "";

    const [currentCV, setCurrentCV] = useState(PythonCVURL);

    const handleButtonClick = (url: string) => {
        setCurrentCV(url);
    };

    return (
        <div>
        <ResumePanel data={CVData} handleButtonClick={handleButtonClick} />
        <Document file={currentCV} renderMode='svg' className={`${styles.main} ${theme}`} onLoadError={console.error}>
            <Page pageNumber={1} renderTextLayer={false} className={styles.page} onLoadError={console.error}/>
        </Document>
        </div>
    );
}

export default Resume;