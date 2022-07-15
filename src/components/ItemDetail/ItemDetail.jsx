import React, { useState, useContext } from "react";
import './ItemDetail.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount.jsx";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { cartContext } from "../../context/CartContext";
import Notifications from './../Notifications/Notifications.jsx';

const ItemDetail = ({ product }) => {

  let [finishBuy, setFinishBuy] = useState(false);
  let [showNotification, setShowNotification] = useState(false);
  const { addProduct, checkStock } = useContext(cartContext);

  const initial = 1;

  const buyMore = () => {
    setFinishBuy(false);
    setShowNotification(false);
  }

  const onAdd = (count) => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    addProduct({...product, qty: count})
    setFinishBuy(true);
  }

  const {img, name, price, description} = product
  return (
    <div className="card-container">
      {showNotification ? <Notifications type={'success'} title={'Added to cart'} content={`${product.name}`}/> : ''}
      <Card sx={{ maxWidth: 800 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={img}
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name} Details
            </Typography>
            <Typography gutterBottom variant="h6" color="text.secondary">
              <div>${price}</div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {finishBuy ? 
        <div className="count-container">
          <Button className="finish" variant="outlined" onClick={buyMore}>Buy More</Button>
          <Link to='/cart'>
          <Button className="finish" variant="outlined">Finish</Button>
        </Link>
        </div> : <ItemCount stock={checkStock(product)} onAdd={onAdd} initial={initial} />} 
    </div>
  );
};

export default ItemDetail