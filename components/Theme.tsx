import React, { createContext, useState, useEffect } from 'react';
import cookie from 'js-cookie';

const expiryDays = 365;

export const ThemeContext = createContext({
    mode: "",
    toggleMode: () => {}
});

interface Props {
    children: React.ReactNode;
}

const ThemeProvider = ({ children } : Props) => {

  const [mode, setMode] = useState<string>("");

  useEffect(() => {
    const initialMode = cookie.get("mode") || "light";
    setMode(initialMode);
    cookie.set("mode", initialMode, { expires: expiryDays, path:'/' });
  }, []);


  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    cookie.set("mode", newMode, { expires: 365, path:'/' });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
