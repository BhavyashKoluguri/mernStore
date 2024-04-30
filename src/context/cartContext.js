import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";


const CartContext = createContext();

const getLocalCartData = () =>{
    let localCartData = localStorage.getItem("yashCart");
    if(!localCartData || localCartData === "null") {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    //cart: [],
    cart: getLocalCartData()
    
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState,)

   const addToCart = (amount, dImage, dInfo, dId, dPrice) =>{
    dispatch({type:"ADD_TO_CART", payload:{amount, dImage, dInfo, dId, dPrice}})
   }

   const removeItem = (id) =>{
        dispatch({type:"REMOVE_ITEM", payload:id})
   }

   const clearCart = ()=>{
    dispatch({type:"CLEAR_CART"})
   }

   const setDecrease = (id) => {
    dispatch({type:"SET_DECREMENT", payload: id})
   }

   const setIncrease = (id) => {
    dispatch({type:"SET_INCREMENT", payload: id})
   }

   useEffect(()=>{
    localStorage.setItem("yashCart", JSON.stringify(state.cart))
   },[state.cart]);

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrease}}>{children}</CartContext.Provider>
};

const useCartContext = () =>{
    return useContext(CartContext)
}

export {CartProvider, useCartContext}