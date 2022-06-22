import React from "react";
import guitars from '../../assets/guitars.jpg'
import "./ItemListContainer.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemListContainer = ({greeting}) => {
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={guitars}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {greeting}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            MUSIC SHOP is the world's largest musical instruments retailer. Shop Guitars, Bass, Drums, Amps, DJ, Keyboards, Pro-Audio and more.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ItemListContainer

