import * as React from 'react';
import type { NextPage } from 'next';
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
import { motion, useScroll } from "framer-motion";
// import Header from '../components/Header';

const Papers = () => {

	const { scrollYProgress } = useScroll();

    return (
        <StyledEngineProvider injectFirst>
			<CssBaseline />
			<motion.div style={{ scaleX: scrollYProgress }} className={styles.progressBar}/>
            <Title />
			<Box className={styles.paperContainer}>
				<Header />
			</Box>
		</StyledEngineProvider>
    );
};

export default Papers;