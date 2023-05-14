import * as React from 'react'
import type { NextPage } from 'next'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import { StyledEngineProvider } from '@mui/material/styles'
import Temp from '../components/temp'
import Header from '../components/Header'
import TimeLine from '../components/TimeLine'
import Intro from '../components/Intro'

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
      }),
    [isDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Temp /> */}
      <StyledEngineProvider injectFirst>
        <Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Intro />
        <TimeLine />
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default Home
