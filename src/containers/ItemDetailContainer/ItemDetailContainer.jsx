import React, { useEffect, useState } from "react";
import {getData} from '../../mocks/fakeApi.jsx'
import BounceLoader from "react-spinners/ClipLoader";
import ItemDetail from '../../components//ItemDetail/ItemDetail.jsx'
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  let [loading, setLoading] = useState(true)

  const {productId} = useParams();

  //Promise

  const getProduct = async () => {
    try {
      const res = await getData
      setProduct(res.find(item => item.id === +productId))
    } catch(err){
      console.error(err)
    }finally{
      setLoading(false)
    }
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

