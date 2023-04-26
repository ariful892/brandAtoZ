import { SIDENAVCATEGORYPRODUCTS } from "../actionTypes/actionTypes"

const initialState={
    products:[]

}

const categoryProducts=(state=initialState,actions)=>{
    switch(actions.type){
        case SIDENAVCATEGORYPRODUCTS:
            return{
                ...state,
                products:[actions.payload]
            }



        default:return state
    }

}

export default categoryProducts