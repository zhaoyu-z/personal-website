import useMediaQuery from '@mui/material/useMediaQuery';

export class ThemeInitialiser {

    public prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    
    public themeOptions = {
        "system":  this.prefersDarkMode,
        "light": false,
        "dark": true
    }
}


export const defaultTheme = "dark";