const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { amount, dImage, dInfo, dId, dPrice } = action.payload;
    console.log(amount, dInfo, dImage, dId, dPrice);

    let existingProduct = state.cart.find((curItem) => curItem.id === dId);

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === dId) {
          let newAmount = curElem.amount + amount;
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
            return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      }
    } else {
      let cartProduct = {
        id: dId,
        dInfo,
        dImage,
        amount,
        dPrice,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if(action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem)=>{
        if(curElem.id === action.payload){
            let decAmount = curElem.amount - 1;

            if(decAmount <= 1){
                decAmount = 1;
            }

            return {
                ...curElem,
                amount: decAmount
            }
        } else {
            return curElem
        }
    })
    return {...state, cart: updatedProduct}
  }

  if(action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem)=>{
        if(curElem.id === action.payload){
            let incAmount = curElem.amount + 1;

            return {
                ...curElem,
                amount: incAmount
            }
        } else {
            return curElem
        }
    })
    return {...state, cart: updatedProduct}
  }

  return state;
};

export default cartReducer;
