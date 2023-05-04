import { USER_PROFILE_LOADING_FAIL, USER_PROFILE_LOADING_REQUEST, USER_PROFILE_LOADING_SUCCESS, USER_SIGNOUT, USER_UPDATE_PROFILE_RESET } from "../actionTypes/actionTypes"

const initialState={

    details:[]

}

export const userDetailsReducer=(state = { loading: true },actions)=>{
    switch (actions.type){
        case USER_PROFILE_LOADING_REQUEST :{
            return{loading1:true}

        }

        case USER_PROFILE_LOADING_SUCCESS :{
            return {
                
                loading1:false,
                details:actions.payload
            }
        }

        case USER_PROFILE_LOADING_FAIL:{
            return { loading1: false, error: actions.payload };
        }

        case USER_SIGNOUT:
            return {};

      

        default: 
        return state
    }

}


