function ProductReducer(state, action) {

    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "API_DATA_PRODUCTS":
            const featureProduct = action.payload.filter((product)=>{
                return product.featured === true
                
            })
            return {
                ...state,
                isLoading: false,
                products:action.payload,
                featureProducts:featureProduct
            }

        case "ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        // single product 
        case "SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading:true
            }

        case "SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload
            }

        case "SINGLE_ERROR":
            return {
                ...state,
                isSingleError:true
            }

        default:
            return state
    }
    
}
export default ProductReducer