import { LOAD_CART_PRODUCTS } from "../actionTypes/actionTypes";


const initialState = {
    carts: [],
};

const cartReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case LOAD_CART_PRODUCTS:
            return {
                carts: action.payload,
            }
        default:
            return state;
    }
}

export default cartReducer;