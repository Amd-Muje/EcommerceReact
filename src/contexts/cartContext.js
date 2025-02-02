import React, {createContext, useReducer} from "react";
import { CartReducer } from "./cartReducer";

export const CartContext = createContext();

const initialState = { cartItems: []};

const CartContextProvider = ({children}) => { 
    const [state, dispatch] = useReducer(CartReducer, initialState)
    const addProduct = payLoad => {
      dispatch({type: 'ADD' , payLoad});

    }

    const removeProduct = payLoad => {
      dispatch({type: 'REMOVE', payLoad});
    }

    const increaseQuantity = payLoad => {
      dispatch({type: 'INCQTY', payLoad});
    }

    const decreaseQuantity = payLoad => {
      dispatch({type: 'DECQTY', payLoad});
    }

    const clearBasket = () => {
      dispatch({type: 'CLEAR', payLoad : undefined});
    }

    const getItem = () => {
      return state.cartItems;
    }

    const contextValues = {
      addProduct,
      removeProduct,
      increaseQuantity,
      decreaseQuantity,
      clearBasket,
      getItem,
      ...state
    }
  return (
    
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;