import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout/Layout';
import { MyThemeProvider } from './ThemeContext/ThemeContext';
import { lightTheme, darkTheme } from './Themes/Themes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    // Other global styles based on the theme
  }
`;

function App() {
  
  return (
    <MyThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <GlobalStyle />
      <Router> 
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </MyThemeProvider> 
  )
}

export default App;