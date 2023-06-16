import * as React from 'react'
import type { NextPage } from 'next'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import { StyledEngineProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Header from '../components/Header'
import TimeLine from '../components/TimeLine'
import Intro from '../components/Intro'
import Title from '../components/Title'
import Footer from '../components/Footer'
// import ProjectCard from '../components/ProjectCard'
import { HandleComponentScroll } from '../components/shared/utilities'

const Home: NextPage = () => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const [isDarkMode, setIsDarkMode] = React.useState(prefersDarkMode)

	React.useEffect(() => {
		setIsDarkMode(prefersDarkMode)
	}, [prefersDarkMode])

	const toggleTheme = React.useCallback(() => {
		setIsDarkMode(!isDarkMode)
	}, [isDarkMode])
	
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

						/* The use of these code will propose following errors in console:
						1. Using kebab-case for css properties in objects is not supported.
						Did you mean WebkitBoxShadow?
						2. Using kebab-case for css properties in objects is not supported. 
						Did you mean WebkitTextFillColor?
						
						They can be ignored because if you remove the dash before attributes
						the browser will not find the correct style.
						*/
						'&:-webkit-autofill': {
							'-webkitBoxShadow': '0 0 0 100px #333 inset',
							'-webkitTextFillColor': '#fff',
						},
					},
			  	},
			},
		},
	}), [isDarkMode],)
	
	/* used for checking a component has been scrolled down into viewport*/
	const [isIntroVisible, setIsIntroVisible] = React.useState(false)
	// const [isTimeLineVisible, setIsTimeLineVisible] = React.useState(false)

	const scrollControlList = [
		{
			componentId: "Intro",
			setter: setIsIntroVisible
		},
	]

	scrollControlList.map(({componentId, setter}) => {
		HandleComponentScroll(componentId, setter);
	})

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
			<CssBaseline />
			<Title isDarkMode={isDarkMode} />
			<Box sx={{ 
				transition: "all 0.5s ease",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center"
			}}>
				<Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
				<Intro isVisible={isIntroVisible}/>
				<TimeLine />
				{/* <ProjectCard
					name={"Temp"}
					time={new Date()}
					techs={[ "t1", "t2", "t3" ]}
				/> */}
				<Footer />
			</Box>
			</ThemeProvider>
		</StyledEngineProvider>
	)
}

export default Home
