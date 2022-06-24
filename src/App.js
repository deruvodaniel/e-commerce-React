import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const products = [
  {
    id: 1,
    name: 'Fender Telecaster',
    price: 1568,
    stock: 10,
    img: 'telecaster'
  },
  {
    id: 2,
    name: 'Gibson LesPaul',
    price: 1268,
    stock: 5,
    img: 'lespaul'
  },
  {
    id: 3,
    name: 'Squier Stratocaster',
    price: 868,
    stock: 5,
    img: 'stratocaster'
  },
  {
    id: 4,
    name: 'Cort Electroacustica',
    price: 590,
    stock: 0,
    img: 'acustica'
  },
  {
    id: 5,
    name: 'Squier Stratocaster',
    price: 868,
    stock: 0
  },
  {
    id: 6,
    name: 'Squier Stratocaster',
    price: 868,
    stock: 0
  },
]


function App() {

  const onAdd = () => {
    alert('Product added to cart')
  }

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <div className='card-list'>
          <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 4 }}>
            {products.map((item) => (
              <Grid key={item.id} item xs={1} md={1}>
                <ItemListContainer className="card-item" stock={item.stock} name={item.name} price={item.price} img={item.img} onAdd={onAdd} />
              </Grid>
            ))}
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
