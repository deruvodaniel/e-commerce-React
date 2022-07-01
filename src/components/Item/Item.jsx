import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount.jsx";

const Item = ({ product, onAdd, initial }) => {

  const {img, name, stock, price} = product
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Object.values(img)}
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" color="text.secondary">
              <div>${price}</div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              MUSIC SHOP is the world's largest musical instruments retailer. Shop Guitars, Bass, Drums, Amps, DJ, Keyboards, Pro-Audio and more.
            </Typography>

            <ItemCount stock={stock} onAdd={onAdd} initial={initial} />

          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Item