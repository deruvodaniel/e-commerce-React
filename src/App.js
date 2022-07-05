import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const greetings = 'Welcome to Music Store'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <ItemListContainer greetings={greetings} />
        <ItemDetailContainer greetings={greetings} />
      </ThemeProvider>
    </div>
  );
}

export default App;
