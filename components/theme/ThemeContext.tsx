import React from 'react';

type themeProps = {
    isDarkMode: boolean
    toggleTheme: (props: any) => void
}

const initialThemeContext: themeProps = {
    isDarkMode: false, // it doesn't matter, I will change it later
    toggleTheme: (props: any) => {}
}

console.log("initial context: " + initialThemeContext.isDarkMode + ", " + initialThemeContext.toggleTheme);

const ThemeContext = React.createContext(initialThemeContext);

export default ThemeContext;