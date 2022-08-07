import React, { createContext, useState, useEffect} from "react";
import Swal from 'sweetalert2'

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
      } else {
        alert('No more Stock for this Item')
      }
      setProducts(aux);
    }else {
      setProducts([...products, product]);
    }
  };

  const removeProduct = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      background: '#121212',
      textColor: '#fff',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#e48201',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts(products.filter(product => product.id !== id));
        Swal.fire({
          title: 'Deleted',
          text: "Your product has been deleted from the cart list.",
          icon: 'success',
          background: '#121212',
          confirmButtonColor: '#e48201',
        }
        )
      }
    }) 
  };

  const isInCart = (id) => {
    return products.some(products => products.id === id);
  };

  const clearList = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      background: '#121212',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#e48201',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts([]);
        setQtyProducts(0);
        Swal.fire({
          title: 'Deleted',
          text: "All Your products have been deleted from the cart list.",
          icon: 'success',
          background: '#121212',
          confirmButtonColor: '#e48201',
        }
        )
      }
    }) 
  };

  return (
    <Provider value={{products, addProduct, removeProduct, checkStock, isInCart, qtyProducts, clearList}}>
      {children}
    </Provider>
  )
}

export default CartCustomProvider