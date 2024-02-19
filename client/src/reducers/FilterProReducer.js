
const FilterProReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            };

        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload
            };

        case "SORTING_PRODUCTS":
            let newprodata;

            const { filter_products } = state
            let tempsortproducts = [...filter_products];

            if (state.sorting_value === "lowest") {
                newprodata = tempsortproducts.sort((a, b) => {
                    return a.price - b.price
                })
            }

            if (state.sorting_value === "highest") {
                newprodata = tempsortproducts.sort((a, b) => {
                    return b.price - a.price
                })
            }

            if (state.sorting_value === "a-z") {
                newprodata = tempsortproducts.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            }
            if (state.sorting_value === "z-a") {
                newprodata = tempsortproducts.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                })
            }

            return {
                ...state,
                filter_products: newprodata
            }

        // case "SEARCH":
        //     return{
        //         ...state,
        //         search_product:action.payload
        //     }

        case "FILTER":
            const { name, value } = action.payload
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value
                }
            }

        case "FILTER_PRO_UPDATE":
            let { all_products } = state;
            let tempfilterpro = [...all_products]

            const { text, category, company } = state.filter;
            if (text) {
                tempfilterpro = tempfilterpro.filter((pro) => {
                    return pro.name.toLowerCase().includes(text)
                })
            }

            if (category !== "All") {
                tempfilterpro = tempfilterpro.filter((pro) => {
                    return pro.category === category
                })
            }

            if (company !== "All") {
                tempfilterpro = tempfilterpro.filter((pro) => {
                    return pro.company.toLowerCase() === company.toLowerCase()
                })
            }

            return {
                ...state,
                filter_products: tempfilterpro,
            }

        case "CLEAR_FILTER":
            return{
                ...state,
                filter:{
                    ...state.filter,
                    text: "",
                    category: "All",
                    company: "All"
                }
            }

        default: return state

    }
}

export default FilterProReducer