import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const data = {
    theme,
    handleToggle,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
