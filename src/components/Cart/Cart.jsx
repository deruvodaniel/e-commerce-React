import React, { useContext } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import './Cart.css'
import { useNavigate  } from "react-router-dom";
import Button from '@mui/material/Button';
import { cartContext } from '../../context/CartContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {
  const {qtyProducts, products, removeProduct} = useContext(cartContext);

  const navigate  = useNavigate();
  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {qtyProducts === 0 ? 
            <h4>The Cart is Empty, please select a product to buy!</h4>
            : <List sx={{ width: '100%', maxWidth: 860 }}>
            {products.map(item => <ListItem key={item.id} sx={{ bgcolor: 'background.paper' }}>
                <ListItemAvatar>
                  <Avatar>
                    <img src={item.img} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className="item-text" primary={item.name} secondary={`Cant: ${item.qty}`} />
                <span className="item-text">Total:$ {item.price * item.qty}</span>
                <IconButton edge="end" aria-label="delete"  onClick={() => removeProduct(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>)}
            </List> }
      <Button variant="outlined" onClick={() => navigate(-1)}>Go Back!</Button>
    </div>
  )
}

export default Cart