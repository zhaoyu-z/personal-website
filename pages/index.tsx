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
        },
        transitions: {
          create: () => 'all 1s ease',
        },
      }),
    [isDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Title isDarkMode={isDarkMode} />
      <Box sx={{ transition: "all 1s ease" }}>
        <StyledEngineProvider injectFirst>
          <Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Intro />
          <TimeLine />
        </StyledEngineProvider>
      </Box>
    </ThemeProvider>
  )
}

export default Home
