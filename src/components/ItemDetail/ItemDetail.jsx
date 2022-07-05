import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ product }) => {

  const initial = 1;

  const onAdd = () => {
    alert('Product added to cart')
  }

  const {img, name, stock, price, description} = product
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 800 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={Object.values(img)}
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

            <ItemCount stock={stock} onAdd={onAdd} initial={initial} />

          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ItemDetail