import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import "./CartWidget.css"



const CartWidget = () => {
  return (
    <Button variant="contained">
      <ShoppingCartIcon />
    </Button>
  );
};

export default CartWidget