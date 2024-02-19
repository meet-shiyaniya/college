import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/CartReducer"

const CartContext = createContext();

const getlocaldata = () => {
    let data = localStorage.getItem("CartItem");
    if (data?.length === 0) {
        return [];
    }
    else {
        return JSON.parse(data)
    }
}

const intialstate = {
    // cart: [],
    cart: getlocaldata(),
    total_item: "",
    total_amount: "",
    shipping_fee: 5000
}

const Cartprovider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialstate)

    const addtocart = (id, amount, product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id, amount, product }
        })
    }

    const removeitem = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })
    }

    const clearcart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    const Increase = (id) => {
        dispatch({ type: "INCREMENT", payload: id })
    }
    const Decrease = (id) => {
        dispatch({ type: "DECREMENT", payload: id })
    }

    useEffect(() => {
        dispatch({type:"CART_TOTAL_QUANTITY"})
        dispatch({type:"CART_TOTAL_PRICE"})
        localStorage.setItem("CartItem", JSON.stringify(state.cart))
    }, [state.cart])


    return (<CartContext.Provider value={{ ...state, addtocart, removeitem, clearcart, Increase, Decrease }}>{children}</CartContext.Provider>)
}

const Usecart = () => {
    return useContext(CartContext)
}

export { CartContext, Cartprovider, Usecart }