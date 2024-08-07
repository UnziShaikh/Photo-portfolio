import React from 'react';
import Search from './components/search/Search';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () => {
  const theme = createTheme({
  
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Search />
      </div>
    </ThemeProvider>
  );
};

export default App;
