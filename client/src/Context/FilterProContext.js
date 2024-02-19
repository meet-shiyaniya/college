import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducers/FilterProReducer"

const FilterProContext = createContext();
const intialstate = {
    filter_products: [],
    all_products: [],
    sorting_value: "lowest",
    filter: {
        text: "",
        category: "All",
        company: "All"
    }
}

const FilterProvider = ({ children }) => {

    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, intialstate)

    useEffect(() => {
        dispatch({
            type: "FILTER_PRODUCTS",
            payload: products
        })
    }, [products])

    //sorting
    const sorting = (e) => {
        const selected_value = e.target.value
        dispatch({
            type: "GET_SORT_VALUE",
            payload: selected_value
        })
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRO_UPDATE" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [state.sorting_value, state.filter])

    //search product
    const filterpro = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch({ type: "FILTER", payload: { name, value } })
    }

    // clear filter
    const clearfilter = () => {
        dispatch({ type: "CLEAR_FILTER" })
    }

    return (<FilterProContext.Provider value={{ ...state, sorting, filterpro, clearfilter }}>
        {children}
    </FilterProContext.Provider>
    )
}

const UseFilterPro = () => {
    return useContext(FilterProContext)
}

export { FilterProContext, FilterProvider, UseFilterPro }