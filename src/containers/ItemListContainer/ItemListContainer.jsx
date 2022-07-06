import React, { useEffect, useState } from "react";
import './ItemListContainer.css'
import ItemList from "../../components/ItemList/ItemList.jsx";
import {getData} from '../../mocks/fakeApi.jsx'
import BounceLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greetings }) => {
  const [productList, setProductList] = useState([])
  let [loading, setLoading] = useState(true)

  const {categoryId} = useParams();

  //Promise

  const getProducts = async () => {
    try {
      const res = await getData
      categoryId ? setProductList(res.filter(item => item.category === `${categoryId}`)) 
      : setProductList(res);
    } catch(err){
      console.error(err)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=> {
    getProducts()
  }, [categoryId])


  return (
    <div className="container">
    <h2>{greetings}</h2>
    {loading ? <BounceLoader loading={loading}  color="#e48201" size={150} /> : <ItemList productList={productList}/>}
    </div>
  );
};


export default ItemListContainer

