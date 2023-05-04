import { USER_PROFILE_LOADING_FAIL, USER_PROFILE_LOADING_REQUEST, USER_PROFILE_LOADING_SUCCESS } from "../actionTypes/actionTypes"



export const loadDetails=(userId)=>async(dispatch,getState)=>{
    console.log(userId)
   


    dispatch({type:USER_PROFILE_LOADING_REQUEST})
    // console.log(userId)


   


    try {

        const res=await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/users/${userId}`)

        const data=await res.json()

        if(data){
            dispatch({type:USER_PROFILE_LOADING_SUCCESS,payload:data})
        }


        
    } catch (error) {

        dispatch({
            type: USER_PROFILE_LOADING_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        
    }


}



// export const jf=(pot)=>{
//     console.log(pot)


// }




