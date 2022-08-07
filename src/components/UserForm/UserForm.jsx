import React, { useContext, useState } from "react";
import './UserForm.css';
import SuccessModal from '../SuccessModal/SuccessModal.jsx'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { cartContext } from '../../context/CartContext';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';


const UserForm = () => {
  const [sellId, setSellId] = useState('');
  const { products } = useContext(cartContext);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    tel: '',
    email: '',
    cardNumber: '',
  });

  //Total Calculation
  const initialValue = 0; 
  const total = products.map(item => item.price * item.qty)
  const sum = total.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const saveOperation = () => {
    const sellsCollection = collection(db, 'ventas');
    addDoc(sellsCollection, {
      userData,
      items: products,
      date: serverTimestamp(),
      total: sum
    })
    .then((result) => {
      setSellId(result.id);
      setLoading(false);
    })

    products.forEach((item) => {
      const updateCollection = doc(db, 'products', `${item.id}`);
      updateDoc(updateCollection, {stock: (item.stock - item.qty)})
    })
  }


  const handleChange = (prop) => (event) => {
    setUserData({ ...userData, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    saveOperation();
    setShowModal(true);
    console.log('dani');
  };

  return (
    <div className="form-container">
      {!showModal ? <form action="submit" id="user-form">
      <h5>Please fill out the form to complete your purchase.</h5>
        <TextField
          required 
          fullWidth 
          className='input'
          id="name"
          label="Name"
          type="text"
          variant="standard"
          color="warning"
          value={userData.name}
          onChange={handleChange('name')}
        />
        <TextField
          required
          fullWidth 
          className='input'
          id="lastName"
          label="Last Name"
          type="text"
          variant="standard"
          color="warning"
          value={userData.lastName}
          onChange={handleChange('lastName')}
        />
        <TextField
          required
          fullWidth 
          className='input'
          id="tel"
          label="Tel"
          type="number"
          variant="standard"
          color="warning"
          value={userData.tel}
          onChange={handleChange('tel')}
        />
        <TextField
          required
          fullWidth 
          className='input'
          id="email"
          label="E-mail"
          type="email"
          variant="standard"
          color="warning"
          value={userData.email}
          onChange={handleChange('email')}
        />
        <TextField
          required
          fullWidth 
          className='input'
          id="cardNumber"
          type="number"
          label="Card Number"
          variant="standard"
          color="warning"
          value={userData.cardNumber}
          onChange={handleChange('cardNumber')}
        />
        <Button form="user-form" type="submit" variant="outlined" onClick={() => handleSubmit()}>Send<SendIcon /></Button>
      </form> : <SuccessModal loading={loading} sellId={sellId} userData={userData} products={products} total={sum}/>}    
      
    </div>
  );
};

export default UserForm