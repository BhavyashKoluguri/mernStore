import { Link, useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import './DetailsPage.css'
import { useProductContext } from "../../context/ProductContext";
import productReducer from "../../Reducer/productReducer";
import CartAmountToggle from "../../components/CartAmountToggle/CartAmountToggle";
import { useState } from "react";
import { useCartContext } from "../../context/cartContext";

const DetailsPage = () => {

  const {addToCart} = useCartContext();  
  
  const [amount, setamount] = useState(1);

  const {data} = useProductContext();
  
  console.log(data)

  const initialState = {
    
    dImage: [],
    dInfo: [],
    dPrice:[]
  };
  const [state, dispatch] = useReducer(productReducer, initialState)

  const setDecrease = () =>{
    amount > 1 ? setamount(amount-1):setamount(1);
  }

  const setIncrease = () =>{
    setamount(amount+1)
  }


  

  const params = useParams();
  console.log(params);

  const getImage = async () => {
    try {
      const product = data.find(item => item.id === params.id);
      if (product) {
        dispatch({ type: "D_IMAGE", payload: product.image });
        dispatch({ type: "D_INFO", payload: product.name });
        dispatch({ type: "D_PRICE", payload: product.price });
      }
    } catch (error) {
      console.error("Error retrieving product details:", error);
    }
  };
  

  useEffect(() => {
    getImage();
  },[params.id, data])

  return (
    <>
    <div className="details_container">
      <h1>This is {state.dInfo}</h1>
      <img src={state.dImage} alt="Imag" className="detail_img"/>
    </div>
    <div className="plus-minus">
    <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
    <Link to="/cart" onClick={()=> addToCart(amount, state.dImage, state.dInfo, params.id, state.dPrice)} className="cart-btn">Add to cart</Link>
    </div>
    </>
  );
};

export default DetailsPage;
