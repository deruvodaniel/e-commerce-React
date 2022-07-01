import React, { useEffect, useState, CSSProperties } from "react";
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList.jsx";
import {getData} from '../../mocks/fakeApi'
import SyncLoader from "react-spinners/ClipLoader";


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

  //Loader
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#e48201",
  };

  return (
    <div className="container">
    <h2>{greetings}</h2>
    {loading ? <SyncLoader loading={loading} cssOverride={override} size={150} /> : <ItemList productList={productList}/>}
    </div>
  );
};


export default ItemListContainer

