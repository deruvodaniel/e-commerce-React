import React from "react";
import './Cart.css'
import logo from '../../assets/logo.png'
import { useNavigate  } from "react-router-dom";
import Button from '@mui/material/Button';


const Cart = () => {
  const navigate  = useNavigate();
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <p>Cart is empty, please select a product to buy! :)</p>
      <img className="cart-logo" src={logo} alt="" />
      <Button variant="outlined" onClick={() => navigate(-1)}>Go Back!</Button>
    </div>
  )
}

export default Cart