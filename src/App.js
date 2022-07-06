import React from 'react';
import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Cart from './components/Cart/Cart.jsx'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

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
        <BrowserRouter>
          <NavBar />
          <Routes>     
            <Route path="/" element={<ItemListContainer greetings={greetings}/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greetings={greetings}/>}/>
            <Route path="/product/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
