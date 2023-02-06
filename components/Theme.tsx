import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
    mode: false,
    toggleMode: () => {}
});

interface Props {
    children: React.ReactNode;
}

const ThemeProvider = ({ children } : Props) => {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
