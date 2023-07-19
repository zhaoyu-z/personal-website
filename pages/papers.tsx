import * as React from 'react';
import type { NextPage } from 'next';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledEngineProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import TimeLine from '../components/TimeLine';
import Intro from '../components/Intro';
import Title from '../components/Title';
import Footer from '../components/Footer';
// import { HandleComponentScroll } from '../components/shared/utilities';
import styles from '../styles/Home.module.css';
import Projects from '../components/Projects';
import * as config from '../components/config/Home.config';
import { motion, useScroll } from "framer-motion";

const Papers = () => {
    return (
        <StyledEngineProvider injectFirst>
			{/* <ThemeProvider theme={theme}> */}
			<CssBaseline />
			{/* <motion.div style={{ scaleX: scrollYProgress }} className={styles.progressBar}/> */}
			{/* <Title isDarkMode={isDarkMode} /> */}
            <Title />
			<Box>
                Temporary
			</Box>
			{/* </ThemeProvider> */}
		</StyledEngineProvider>
    );
};

export default Papers;