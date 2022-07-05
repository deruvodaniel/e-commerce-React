import React, { useEffect, useState } from "react";
import {getItem} from '../../mocks/fakeApi'
import BounceLoader from "react-spinners/ClipLoader";
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import './ItemDetailContainer.css'



const ItemDetailContainer = ({ greetings }) => {
  const [item, setItem] = useState([])
  let [loading, setLoading] = useState(true)

  //Promise

  const getProduct = async () => {
    try {
      const res = await getItem
      setItem(res)
    } catch(err){
      console.error(err)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=> {
    getProduct()
  }, [])


  return (
    <div className="container">
    <h2>{item.name}</h2>
    {loading ? <BounceLoader loading={loading}  color="#e48201" size={150} /> : <ItemDetail product={item}/>}
    </div>
  );
};


export default ItemDetailContainer

