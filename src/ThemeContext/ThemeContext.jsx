import React, { useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Themes/Themes';

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export const MyThemeProvider = ({ children }) => {

  const updateThemeStyles = (currentTheme) => {
    const root = document.documentElement;
    root.style.setProperty('--background-light', currentTheme === 'light' ? '#F0F0F0' : '#1a1a1a');
    root.style.setProperty('--text-light', currentTheme === 'light' ? '#000' : '#F0F0F0');
    root.style.setProperty('--color-light', currentTheme === 'light' ? '#000' : '#F0F0F0');

    if (currentTheme === 'light') {
      root.style.setProperty('--blue', 'var(--blue-light)');
      root.style.setProperty('--shadow-blue', 'var(--box-shadow-dark-blue)');
      root.style.setProperty('--header-shadow', 'var(--header-shadow-dark)');
      root.style.setProperty('--card-background-color', 'var(--background-light-blue)');
      root.style.setProperty('--card-border-color', 'var(--dark-metal)');
      root.style.setProperty('--icon-color', 'var(--blue-dark)');
      root.style.setProperty('--icon-color', 'var(--blue-dark)');

      // Set other light theme variables 
  } else {
      root.style.setProperty('--blue', 'var(--blue-dark)');
      root.style.setProperty('--shadow-blue', 'var(--box-shadow-light-blue)');
      root.style.setProperty('--header-shadow', 'var(--header-shadow-light)');
      root.style.setProperty('--card-background-color', 'var(--background-dark-blue)');
      root.style.setProperty('--card-border-color', 'var(--light-silver)');
      root.style.setProperty('--icon-color', 'var(--blue-light)');
      // Set other dark theme variables
  }
};
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme); 

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    updateThemeStyles(theme);
}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

