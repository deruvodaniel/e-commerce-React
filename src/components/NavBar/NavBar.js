import React from "react";
import logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="img-logo" />
      <h1>Music Store</h1>
      <a href="https://listado.mercadolibre.com.ar/guitarras-ofertas#D[A:guitarras%20ofertas]">Ofertas de la semana</a>
      <a href="https://listado.mercadolibre.com.ar/instrumentos-musicales#D[A:instrumentos%20musicales]">Productos</a>
      <a href="https://listado.mercadolibre.com.ar/instrumentos-musicales-combo#D[A:instrumentos%20musicales%20combo]">Promociones</a>
      <button>
        <ShoppingCartIcon />
      </button>
    </div>
  )
}

export default NavBar