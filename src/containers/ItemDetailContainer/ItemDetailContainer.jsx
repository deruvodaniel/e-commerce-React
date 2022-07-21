import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/ClipLoader";
import ItemDetail from '../../components//ItemDetail/ItemDetail.jsx'
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {doc, getDoc, collection} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  let [loading, setLoading] = useState(true)

  const {productId} = useParams();

  //Get Data from Firebase

  const getProduct = () => {
    const productsCollection = collection(db, 'products');
    const refDoc = doc(productsCollection, productId);
    
    getDoc(refDoc)
    .then(result => {
      setProduct(result.data());
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  }

  useEffect(()=> {
    setLoading(true)
    getProduct()
  }, [productId])


  return (
    <div className="details-container">
    {loading ? <BounceLoader loading={loading}  color="#e48201" size={150} /> : <ItemDetail product={product}/>}
    </div>
  );
};


export default ItemDetailContainer

