import React, { useState } from "react";
import './ItemCount.css';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import Button from '@mui/material/Button';

const ItemCount = ({ stock, onAdd, initial }) => {

  const [amount, setAmount] = useState(initial);
  const count = (value) => {
    const result = amount + value
    if (result <= stock && result >= 0) {
      setAmount(amount + value)
    }
  }

  return (
    <div className="counter-container">
      <div className="counter">
        <button onClick={() => count(-1)}>
          <RemoveCircleOutlinedIcon />
        </button>
        <span>Cant</span>
        {amount} | {stock}
        <span> Stock </span>
        <button onClick={() => count(+1)}>
          <AddCircleOutlinedIcon />
        </button>
      </div>
      <div className="add">
        <Button variant="outlined" onClick={onAdd}>Add to Cart</Button>
      </div>
    </div>
  );
};


export default ItemCount