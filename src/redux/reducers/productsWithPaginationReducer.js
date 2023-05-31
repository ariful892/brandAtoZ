import { LOAD_FILTERED_PRODUCTS, LOAD_PRICE_FILTERED_PRODUCTS, PRODUCTS_PAGINATION, PRODUCTS_PAGINATION_REQUEST, PRODUCTS_PAGINATION_SUCCESS } from "../actionTypes/actionTypes"



const initialState = {
    paginated_products: [],
    filtered_products: [],
}


const pagitedProducts = (state = initialState, actions) => {
    switch (actions.type) {

        case PRODUCTS_PAGINATION_REQUEST: {
            return { loading1: true }
        }


        case PRODUCTS_PAGINATION_SUCCESS: {
            return {
                ...state,
                loading1: false,
                paginated_products: actions.payload,

                filtered_products: actions.payload
            }

        }

        case LOAD_FILTERED_PRODUCTS: {

            if (actions.payload === 'any') {
                return {
                    ...state,
                    loading1: false,
                    filtered_products: state.paginated_products,
                }
            }

            return {
                ...state,
                loading1: false,
                filtered_products: actions.payload
            }

        }

        case LOAD_PRICE_FILTERED_PRODUCTS: {
            // console.log('actions')
            // console.log(actions.payload)
            return {
                ...state,
                loading1: false,
                filtered_products: actions.payload
            }

        }

        default: return state
    }
}

export default pagitedProducts