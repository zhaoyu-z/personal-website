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

const Home: NextPage = () => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const [isDarkMode, setIsDarkMode] = React.useState(
		config.defaultTheme === "system"
		?
		prefersDarkMode
		:
		config.defaultTheme === "light" ? false : true
	);

	React.useEffect(() => {
		if (config.defaultTheme === "system") {
			setIsDarkMode(prefersDarkMode);
		}
	}, [prefersDarkMode]);

	const toggleTheme = React.useCallback(() => {
		setIsDarkMode(!isDarkMode);
	}, [isDarkMode]);
	
	const theme = React.useMemo(() =>
	createTheme({
		palette: {
			mode: isDarkMode ? 'dark' : 'light',
			background: {
				default: isDarkMode ? '#333' : '#fff',
				paper: isDarkMode ? '#333' : '#999 !important',
			},

			text: {
				primary: isDarkMode ? '#fff' : '#333',
				secondary: isDarkMode ? '#aaa' : '#777',
			},
		},
		transitions: {
			create: () => 'all 0.5s ease',
		},
		components: {
			MuiOutlinedInput: {
			  	styleOverrides: {
					input: {
						/* make the MuiOutlinedInput stay as same color as background when
                        you use chrome's autocomplete (#333 is the color) to fill it */
						'&:-webkit-autofill': {
							'WebkitBoxShadow': '0 0 0 100px #333 inset',
							'WebkitTextFillColor': '#fff',
						},
					},
			  	},
			},
		},
	}), [isDarkMode],);
	
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
			<ThemeProvider theme={theme}>
			<CssBaseline />
			<motion.div style={{ scaleX: scrollYProgress }} className={styles.progressBar}/>
			<Title isDarkMode={isDarkMode} />
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
					<Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
					<Intro />
					<TimeLine />
					<Projects />
					<Footer />
				</Box>
			</Box>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default Home;
