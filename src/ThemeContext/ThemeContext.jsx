import React, { useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Themes/Themes';

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export const MyThemeProvider = ({ children }) => {

  const updateThemeStyles = (currentTheme) => {
    const root = document.documentElement;
    root.style.setProperty('--background-light', currentTheme === 'light' ? '#F0F0F0' : '#000');
    root.style.setProperty('--text-light', currentTheme === 'light' ? '#000' : '#F0F0F0');
    root.style.setProperty('--color-light', currentTheme === 'light' ? '#000' : '#F0F0F0');

    if (currentTheme === 'light') {
      root.style.setProperty('--blue', 'var(--blue-light)');
      root.style.setProperty('--shadow-blue', 'var(--box-shadow-dark-blue)');
      root.style.setProperty('--header-shadow', 'var(--header-shadow-dark)');
      // Set other light theme variables
  } else {
      root.style.setProperty('--blue', 'var(--blue-dark)');
      root.style.setProperty('--shadow-blue', 'var(--box-shadow-light-blue)');
      root.style.setProperty('--header-shadow', 'var(--header-shadow-light)');
      // Set other dark theme variables
  }
    
};

  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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

