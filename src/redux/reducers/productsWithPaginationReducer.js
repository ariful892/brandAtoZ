import { PRODUCTS_PAGINATION, PRODUCTS_PAGINATION_REQUEST, PRODUCTS_PAGINATION_SUCCESS } from "../actionTypes/actionTypes"



const initialState={
    paginated_products:[]
}


const pagitedProducts=(state=initialState,actions)=>{
    switch(actions.type){

        case PRODUCTS_PAGINATION_REQUEST:{
            return{loading1:true}
        }


        case PRODUCTS_PAGINATION_SUCCESS:{
            return{
                ...state,
                loading1:false,
                paginated_products:[actions.payload]
            }

        }
        default:return state
    }
}

export  default pagitedProducts