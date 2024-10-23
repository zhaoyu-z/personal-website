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

const Home: NextPage = () => {
	
	/* used for checking a component has been scrolled down into viewport */
	// const [isIntroVisible, setIsIntroVisible] = React.useState(false);
	// const [isTimeLineVisible, setIsTimeLineVisible] = React.useState(false)

	// const scrollControlList = [
	// 	{
	// 		componentId: "Home_Intro",
	// 		setter: setIsIntroVisible
	// 	},
	// ];

	// scrollControlList.map(({componentId, setter}) => {
	// 	HandleComponentScroll(componentId, setter);
	// });

	const { scrollYProgress } = useScroll();

	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<motion.div style={{ scaleX: scrollYProgress }} className={styles.progressBar}/>
			<Title />
			<Box id="HomeBackgroundImage"
				sx={{ 
					backgroundImage: 'url("../Homepage Background Full.webp")',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
				}}
				className={styles.backgroundImage}
			>
				<Box id="HomeContainer"
					sx={{
						transition: "all 0.5s ease",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Header />
					<Intro />
					<Projects />
					<TimeLine />
					<Footer />
				</Box>
			</Box>
		</StyledEngineProvider>
	);
};

export default Home;
