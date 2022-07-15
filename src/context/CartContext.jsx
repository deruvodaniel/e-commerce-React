import React, { createContext, useState, useEffect} from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [qtyProducts, setQtyProducts] = useState(0);

  const checkStock = (currProduct) => {
    const match = products.find(item => item.id === currProduct.id);
    if (match) {
      const realStock = currProduct.stock - match.qty;
      return realStock
    } else return currProduct.stock;
  };
  
  const getQuantity = () => {
    let qty = 0;
    products.forEach(product => {
      let stock = product.stock;
      qty += product.qty;
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
    <Provider value={{products, addProduct, removeProduct, checkStock, isInCart, qtyProducts, clearList}}>
      {children}
    </Provider>
  )
}

export default CartCustomProvider