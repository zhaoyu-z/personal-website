import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import styles from '../styles/Resume.module.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { ThemeContext } from './Theme';
import Panel from './Panel';

pdfjs.GlobalWorkerOptions.workerSrc = '//unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js';

function Resume() {

    const JavaCVURL = "https://raw.githubusercontent.com/Zhayu517/Resume/main/CV_Java/Zhaoyu%20Zhang%20CV.pdf";
    const PythonCVURL = "https://raw.githubusercontent.com/Zhayu517/Resume/main/CV_Python/Zhaoyu%20Zhang%20CV.pdf";

    const CVData: {[key: string]: string} = {
        "Java CV": JavaCVURL,
        "Python CV": PythonCVURL,
    }

    const { mode } = React.useContext(ThemeContext)
    const theme = mode === "dark" ? styles.dark : "";

    const [currentFile, setCurrentFile] = useState<string>("Java CV");

    const handleButtonClick = (filename: string) => {
        setCurrentFile(filename);
    };

    return (
        <div className={styles.contentContainer}>
        <Panel filename={currentFile} data={CVData} handleButtonClick={handleButtonClick} />
        <Document file={CVData[currentFile]} renderMode='svg' className={`${styles.main} ${theme}`} onLoadError={console.error}>
            <Page pageNumber={1} renderTextLayer={false} className={styles.page} onLoadError={console.error}/>
        </Document>
        </div>
    );
}

export default Resume;