import React, { createContext, useState, useEffect} from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [qtyProducts, setQtyProducts] = useState(0);

  const getQuantity = () => {
    let qty = 0;
    products.forEach(product => {
      let stock = product.stock;
      if (qty < stock){
        qty += product.qty;
        // let stockRest = product.stock - qty;
        // console.log(stockRest);
      } else {
        alert('No more stock for this product')
      }
    });
    setQtyProducts(qty);
  };

  useEffect(() => {
    getQuantity();
  }, [products])
  

  const addProduct = (product) => {
    if(isInCart(product.id)){
      const found = products.find(p => p.id === product.id);
      const index = products.indexOf(found);
      const aux = [...products];
      if(aux[index].qty <= product.stock){
        aux[index].qty += product.qty;
      } else {
        alert('No more Stock for this Item')
      }
      setProducts(aux);
    }else {
      setProducts([...products, product]);
    }
  };

  const removeProduct = (id) => {
    if (window.confirm("Delete product from cart list?") === true) {
      setProducts(products.filter(product => product.id !== id));
    } 
  };

  const isInCart = (id) => {
    return products.some(products => products.id === id);
  };

  const clearList = () => {
    setProducts([]);
  };

  return (
    <Provider value={{products, addProduct, removeProduct, isInCart, qtyProducts, clearList}}>
      {children}
    </Provider>
  )
}

export default CartCustomProvider