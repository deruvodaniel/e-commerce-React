import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <NavBar/>
      <ItemListContainer greeting="Welcome to Music Shop"/>
      </ThemeProvider>
    </div>
  );
}

export default App;
