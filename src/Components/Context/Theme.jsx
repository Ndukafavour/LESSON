import { createContext, useState } from "react";
export const ThemeContext = createContext(null);

const Theme = ({ children }) => {

  const [Theme, setTheme] = useState("light");

  const lightMode = () => {
    setTheme("light");
  };

  const darkMode = () => {
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{darkMode,lightMode,Theme}}>
      {children}
      <p>hello world </p>
    </ThemeContext.Provider>
  );
};

export default Theme;
