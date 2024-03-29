import React from "react";
import { Grid } from "@mui/material";
import Item from "../Item/Item.jsx";

const ItemList = ({ productList }) => {

  const initial = 1;

return (
  <div className='card-list'>
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 4 }}>
      {productList.map((item) => (
        <Grid key={item.id} item xs={1}>
          <Item className="card-item" product={item} initial={initial} />
        </Grid>
      ))}
    </Grid>
  </div>
  );
};

export default ItemList