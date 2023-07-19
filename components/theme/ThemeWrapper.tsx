import React from 'react';
import { createTheme, useMediaQuery, ThemeProvider } from '@mui/material';
import ThemeContext from './ThemeContext';
import * as config from '../config/Theme.config';


const ThemeWrapper = ({ children }: any) => {
	
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	
	const [isDarkMode, setIsDarkMode] = React.useState(
		config.defaultTheme === 'system' ? prefersDarkMode : config.defaultTheme === 'light' ? false : true
	);

	React.useEffect(() => {
		if (config.defaultTheme === 'system') {
		  setIsDarkMode(prefersDarkMode);
		}
	}, [prefersDarkMode]);

	const toggleTheme = React.useCallback(() => {
		setIsDarkMode(!isDarkMode);
	}, [isDarkMode]);

	// const toggleTheme = () => {
	// 	setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
	// };

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

	console.log("ThemeWrapper Dark mode: " + isDarkMode);
	console.log("ThemeWrapper toggleTheme: " + toggleTheme);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{/* <h1>{`Hello ${isDarkMode}!`}</h1> */}
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
	// return {isDarkMode, toggleTheme, theme};
};

export default ThemeWrapper;