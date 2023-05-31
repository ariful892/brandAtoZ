import { LOAD_FILTERED_PRODUCTS, LOAD_PRICE_FILTERED_PRODUCTS, PRODUCTS_PAGINATION, PRODUCTS_PAGINATION_REQUEST, PRODUCTS_PAGINATION_SUCCESS } from "../actionTypes/actionTypes"


const loadsAllProducts = (num) => async (dispatch, getState) => {


    dispatch({ type: PRODUCTS_PAGINATION_REQUEST })

    try {
        const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=2&seller=&name=&category=&min=0&max=0&rating=0&order=newest&flash_sale=&fbclid=IwAR1ZjlVfQ47TbVJYFcWSMX3adhBvcUazy9TRLydJiWYksGh5pxsVOuoXYOM`)

        const data = await res.json()

        // console.log(data.products)

        if (data) {
            dispatch({ type: PRODUCTS_PAGINATION_SUCCESS, payload: data })
        }

    } catch (error) {

    }

}


export const loadAllProductsPagination = (number) => async (dispatch) => {
    const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=${number}&seller=&name=&category=&min=0&max=0&rating=0&order=newest&flash_sale=&fbclid=IwAR1ZjlVfQ47TbVJYFcWSMX3adhBvcUazy9TRLydJiWYksGh5pxsVOuoXYOM`)

    const data = await res.json()

    // console.log(data.products)

    if (data) {
        dispatch({ type: PRODUCTS_PAGINATION_SUCCESS, payload: data })
    }

}



// export const loadFilteredProduct = (data) => {
//     console.log(data)
//     return {
//         type: LOAD_FILTERED_PRODUCTS,
//         payload: {
//             products: data.products,
//             category: data.category
//         },
//     }
// }

export const loadFilteredProduct = (category) => async (dispatch, getState) => {

    if (category === 'any') {
        dispatch({ type: PRODUCTS_PAGINATION_REQUEST })

        try {
            const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=2&seller=&name=&category=&min=0&max=0&rating=0&order=newest&flash_sale=&fbclid=IwAR1ZjlVfQ47TbVJYFcWSMX3adhBvcUazy9TRLydJiWYksGh5pxsVOuoXYOM`)

            const data = await res.json()

            // console.log('data')
            // console.log(data.products)

            if (data) {
                dispatch({ type: PRODUCTS_PAGINATION_SUCCESS, payload: data })
            }

        } catch (error) {

        }
    }

    else {
        dispatch({ type: PRODUCTS_PAGINATION_REQUEST })

        try {
            const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=1&seller=&name=&category=${category}&min=0&max=0&rating=0&order=newest&flash_sale=`)

            const data = await res.json()
            // console.log(data)

            if (data) {
                dispatch({ type: LOAD_FILTERED_PRODUCTS, payload: data })
            }

        } catch (error) {

        }
    }

}

export const loadPriceFilteredProduct = (price) => async (dispatch, getState) => {
    dispatch({ type: PRODUCTS_PAGINATION_REQUEST })

    try {
        const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=2&seller=&name=&category=&min=0&max=0&rating=0&order=newest&flash_sale=&fbclid=IwAR1ZjlVfQ47TbVJYFcWSMX3adhBvcUazy9TRLydJiWYksGh5pxsVOuoXYOM`)

        const data = await res.json()

        // console.log(data.products)

        // console.log(typeof price.lowPrice)
        // console.log(price.highPrice)

        let products;

        if (price.lowPrice === 500 && price.highPrice === 1000) {
            products = data.products.filter(p => p.price >= price.lowPrice && p.price <= price.highPrice)

            // const product = products.map(p => console.log(p.price))
        }

        if (price.lowPrice === 1000 && price.highPrice === 2000) {
            products = data.products.filter(p => p.price >= price.lowPrice && p.price <= price.highPrice)

            // const product = products.map(p => console.log(p.price))
        }

        if (price.lowPrice === 2000 && price.highPrice === 3000) {
            products = data.products.filter(p => p.price >= price.lowPrice && p.price <= price.highPrice)

            // const product = products.map(p => console.log(p.price))
        }

        // console.log(products)

        if (products) {
            // dispatch({ type: LOAD_PRICE_FILTERED_PRODUCTS, payload: products })
            const data = {
                products: products
            }
            dispatch({ type: LOAD_PRICE_FILTERED_PRODUCTS, payload: data })
        }

    } catch (error) {

    }
}



export default loadsAllProducts


