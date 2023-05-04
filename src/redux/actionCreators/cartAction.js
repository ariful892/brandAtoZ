import { LOAD_CART_PRODUCTS } from "../actionTypes/actionTypes"


export const loadCartProducts = (data) => {
    // console.log(data)
    return {
        type: LOAD_CART_PRODUCTS,
        payload: data,
    }
}