import { loadCartProducts } from "../../actionCreators/cartAction";

const loadCartProductsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/cart");
        const data = await res.json();

        // console.log(data)
        if (data.length) {
            dispatch(loadCartProducts(data));
        }
    }
}

export default loadCartProductsData;