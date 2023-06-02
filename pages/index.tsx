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
import ProjectCard from '../components/ProjectCard'

const Home: NextPage = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkMode, setIsDarkMode] = React.useState(prefersDarkMode)

  React.useEffect(() => {
    setIsDarkMode(prefersDarkMode)
  }, [prefersDarkMode])

  const toggleTheme = React.useCallback(() => {
    setIsDarkMode(!isDarkMode)
  }, [isDarkMode])

  const theme = React.useMemo(
    () =>
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
      }),
    [isDarkMode],
  )

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
            <Intro />
            <TimeLine />
			{/* <ProjectCard
				name={"Temp"}
				time={new Date()}
				techs={[ "t1", "t2", "t3" ]}
			/> */}
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home
