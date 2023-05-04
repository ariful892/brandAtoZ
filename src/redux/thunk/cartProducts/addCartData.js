const addCartData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/cart", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json",
            },
        });
        const data = await res.json();

        // console.log(data.acknowledged)
        if (data.acknowledged) {
            // dispatch(loadCartProducts(data));
        }
    }
}

export default addCartData;