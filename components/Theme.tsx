import React, { createContext, useState, useEffect } from 'react';
import cookie from 'js-cookie';

export const ThemeContext = createContext({
    mode: "",
    toggleMode: () => {}
});

interface Props {
    children: React.ReactNode;
}

const ThemeProvider = ({ children } : Props) => {
  // const [mode, setMode] = useState<string>();
  // if (!cookie.get("mode")) {
  //   cookie.set("mode", "light", { expires: 365, secure:true, path:'/' });
  //   setMode("light");
  // } else {
  //   setMode(cookie.get("mode"));
  // }
  // const [mode, setMode] = useState(cookie.get("mode") ? cookie.get("mode") : "light");
  const [mode, setMode] = useState(cookie.get("mode") || "light");

  // const toggleMode = () => {
  //   setMode(mode === "light" ? "dark" : "light");
  // };
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    cookie.set("mode", newMode, { expires: 365, secure:true, path:'/' });
  };

  // useEffect(() => {
  //   cookie.set("mode", mode, { expires: 365, secure:true, path:'/' });
  // }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
