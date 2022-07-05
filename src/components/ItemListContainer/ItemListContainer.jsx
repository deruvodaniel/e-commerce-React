import React, { useEffect, useState } from "react";
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList.jsx";
import {getData} from '../../mocks/fakeApi'
import BounceLoader from "react-spinners/ClipLoader";


const ItemListContainer = ({ greetings }) => {
  const [productList, setProductList] = useState([])
  let [loading, setLoading] = useState(true)

  //Promise

  const getProducts = async () => {
    try {
      const res = await getData
      setProductList(res)
    } catch(err){
      console.error(err)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=> {
    getProducts()
  }, [])


  return (
    <div className="container">
    <h2>{greetings}</h2>
    {loading ? <BounceLoader loading={loading}  color="#e48201" size={150} /> : <ItemList productList={productList}/>}
    </div>
  );
};


export default ItemListContainer

