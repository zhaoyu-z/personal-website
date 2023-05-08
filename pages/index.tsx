import * as React from 'react'
import type { NextPage } from 'next'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import { StyledEngineProvider } from '@mui/material/styles';
import Temp from '../components/temp'
import Header from '../components/Header'
import TimeLine from '../components/TimeLine'

const Home: NextPage = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Temp /> */}
      <StyledEngineProvider injectFirst>
        <Header />
        <TimeLine />
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default Home
