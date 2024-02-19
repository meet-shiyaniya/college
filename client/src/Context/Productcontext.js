import axios from "axios";
import reducer from "../reducers/ProductReducer"

const { useContext, createContext, useEffect, useReducer } = require("react");


const Appcontext = createContext();

// const api = "https://api.pujakaitem.com/api/products";
const api="/products";

const intialState = {
    products: [],
    isLoading: false,
    isError: false,
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
    isSingleError: false
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState)

    const getProducts = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const res = await axios.get(url)
            const products = await res.data
            dispatch({
                type: "API_DATA_PRODUCTS",
                payload: products
            })
        } catch (error) {
            dispatch({
                type: "ERROR"
            })
        }
    }

    const getsingleproduct = async (url) => {
        dispatch({ type: "SINGLE_LOADING" })
        try {
            const res = await axios.get(url)
            const singlepro = await res.data
            dispatch({ type: "SINGLE_PRODUCT", payload: singlepro })
        }
        catch (error) {
            dispatch({
                type: "SINGLE_ERROR"
            })
        }
    }

    useEffect(() => {
        getProducts(api)
    }, [])



    return <Appcontext.Provider value={{ ...state, getsingleproduct }}>
        {children}
    </Appcontext.Provider>
}

const useProductContext = () => {
    return useContext(Appcontext)
}

export { AppProvider, Appcontext, useProductContext }