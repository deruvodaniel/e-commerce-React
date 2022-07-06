import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

  const {img, name, price, id } = product
  return (
    <div className="card-container">
      <Card sx={{ width: 300}}>
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
            <Link to={`/product/${id}`}>
              <Button variant="outlined">Details</Button>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Item