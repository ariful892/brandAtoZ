import { SIDENAVCATEGORYPRODUCTS, SIDENAVCATEGORYPRODUCTS_FAIL, SIDENAVCATEGORYPRODUCTS_REQUEST, SIDENAVCATEGORYPRODUCTS_SUCCESS } from "../actionTypes/actionTypes"

const initialState={
    products:[],
    loading1:false,
    error:null

}

const categoryProducts=(state=initialState,actions)=>{
    switch(actions.type){

        case SIDENAVCATEGORYPRODUCTS_REQUEST:{
            return { loading1: true };
        }

        case SIDENAVCATEGORYPRODUCTS_SUCCESS :
            return{
              
                ...state,
                loading1: false,
                products:[   actions.payload]
            }

            case SIDENAVCATEGORYPRODUCTS_FAIL :{
                return { loading1: false, error: actions.payload };

            }



        default:return state
    }

}

export default categoryProducts