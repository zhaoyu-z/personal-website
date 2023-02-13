import React from 'react';
import { Document, Page } from 'react-pdf';
import styles from '../styles/Resume.module.css';
// @ts-ignore
import * as pdfjs from 'pdfjs-dist/build/pdf.js';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@3.3.122/build/pdf.worker.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
import { ThemeContext } from './Theme';

function Resume() {

    const JavaCVURL = "https://raw.githubusercontent.com/Zhayu517/Resume/main/CV_Java/Zhaoyu%20Zhang%20CV.pdf";
    const PythonCVURL = "https://raw.githubusercontent.com/Zhayu517/Resume/main/CV_Python/Zhaoyu%20Zhang%20CV.pdf";

    const { mode } = React.useContext(ThemeContext)
    const theme = mode === "dark" ? styles.dark : "";

    return (
        <Document file={PythonCVURL} renderMode='svg' className={`${styles.main} ${theme}`}>
            <Page pageNumber={1} renderTextLayer={false} className={styles.page}/>
        </Document>
    );
}

export default Resume;