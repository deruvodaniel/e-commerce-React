import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Item.css';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip'

const Item = ({ product }) => {

  const {img, name, price, id, stock } = product
  return (
    <div className="card-container">
      <Link to={`/product/${id}`}>
        <Card sx={{ width: 250, height: 280} }>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography gutterBottom variant="h6" color="text.secondary">
                <div>${price}</div>
              </Typography> 
              <Typography gutterBottom variant="p" color="text.secondary">
                {stock < 1 ? <Chip label="No Stock" /> : <div className="details">Details</div>}
              </Typography>           
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default Item