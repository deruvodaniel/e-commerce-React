import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

const Item = ({ product }) => {

  const {img, name, price } = product
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
            <Button variant="outlined">Buy</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Item