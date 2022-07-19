import React, { useContext } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import './Cart.css'
import Button from '@mui/material/Button';
import { cartContext } from '../../context/CartContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const Cart = () => {
  const {qtyProducts, products, removeProduct, clearList} = useContext(cartContext);

  const initialValue = 0; 
  const total = products.map(item => item.price * item.qty)

  const sum = total.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {qtyProducts === 0 ? 
            <h4>The Cart is Empty, please select a product to buy!</h4>
            : <List className="cart__list" sx={{ width: '100%' }}>
            {products.map(item => <ListItem className="cart__list--item" key={item.id} sx={{ bgcolor: 'background.paper' }}>
                <ListItemAvatar>
                  <Avatar>
                    <img className="cart__list--img" src={item.img} alt="img"/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className="item-text" primary={item.name} secondary={`Cant: ${item.qty}`} />
                <span className="item-text">Total:$ {item.price * item.qty}</span>
                <IconButton edge="end" aria-label="delete"  onClick={() => removeProduct(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>)}
              <div className="total">
                <h3>Total: $ {sum}</h3>
              </div>
            </List> }
      <div className="buttons-container">
        <Link to="/"><Button variant="outlined">Go Back!</Button></Link>
        <Button disabled={qtyProducts === 0 ? true : false} variant="outlined" onClick={() => clearList()}>Clear list<DeleteIcon /></Button>
      </div>
    </div>
  )
}

export default Cart