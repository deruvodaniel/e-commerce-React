import React, { useEffect, useState } from "react";
import './ItemListContainer.css'
import ItemList from "../../components/ItemList/ItemList.jsx";
import BounceLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {getDocs, collection, query, where} from "firebase/firestore"


const ItemListContainer = ({ greetings }) => {
  const [productList, setProductList] = useState([])
  let [loading, setLoading] = useState(true)
  const {categoryId} = useParams();

  //Get data from Firebase

  const getProducts = () => {
    const q = categoryId 
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    getDocs(q)
    .then(result => {
      const list = result.docs.map(product => {
        return {
          id: product.id,
          ...product.data()
        }
      })
      setProductList(list)
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
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

