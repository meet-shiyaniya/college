function CartReducer(state, action) {

    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload

        let existingpro = state?.cart?.find((curElem) => curElem.id === id)

        if (existingpro) {
            let updatedpro = state.cart.map((curElem) => {
                if (curElem.id === id) {
                    let totalamount = curElem.amount + amount
                    if (totalamount >= curElem.max) {
                        totalamount = curElem.max
                    }
                    return {
                        ...curElem,
                        amount: totalamount
                    }
                }
                else {
                    return curElem
                }
            });
            return {
                ...state,
                cart: updatedpro
            }
        }
        else {
            let cartproduct;
            cartproduct = {
                id: id,
                name: product.name,
                price: product.price,
                amount: amount,
                image: product.image[0].url,
                max: product.stock
            }
            return {
                ...state,
                cart: [...state.cart, cartproduct]
            }
        }
    }

    if (action.type === "DECREMENT") {
        let updateditem = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let updatedQuantity = curElem.amount - 1
                if (updatedQuantity <= 1) {
                    updatedQuantity = 1
                }
                return {
                    ...curElem,
                    amount: updatedQuantity
                }
            }
            else {
                return curElem
            }
        });
        return {
            ...state,
            cart: updateditem
        }
    }

    if (action.type === "INCREMENT") {
        let updatedItems = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let updatedQuantity = curElem.amount + 1;
                if (updatedQuantity >= curElem.max) {
                    updatedQuantity = curElem.max;
                }
                return {
                    ...curElem,
                    amount: updatedQuantity
                };
            } else {
                return curElem;
            }
        });

        return {
            ...state,
            cart: updatedItems
        };
    }

    if (action.type === "REMOVE_ITEM") {
        let { cart } = state
        let updatedcart = cart.filter((curElem) => curElem.id !== action.payload)
        return {
            ...state,
            cart: updatedcart
        }
    }



    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === "CART_TOTAL_QUANTITY") {
        let totalquantity = state?.cart?.reduce((acc, curElem) => {
            let { amount } = curElem
            acc = acc + amount
            return acc
        }, 0)

        return {
            ...state,
            total_item: totalquantity
        }
    }

    if (action.type === "CART_TOTAL_PRICE") {
        let totalprice = state?.cart?.reduce((acc, curElem) => {
            let { price, amount } = curElem
            acc = acc + price * amount
            return acc
        }, 0)

        return {
            ...state,
            total_amount: totalprice
        }
    }

    return state
}

export default CartReducer