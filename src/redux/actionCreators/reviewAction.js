import { REVIEW_FAIL, REVIEW_REQUEST, REVIEW_SUCCESS } from "../actionTypes/actionTypes";


export const postReview = (formData,prodId) => async (dispatch, getState) => {
    dispatch({ type: REVIEW_REQUEST, payload: formData });

    try {

        // const res = await fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/users/signin', {
        //     method: 'POST',
        //     body: JSON.stringify(userData),
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        // })

        // const data = await res.json()
        fetch(`https://backedforreview-production-6464.up.railway.app/api/prodReview?prodId=${prodId}`, {
          method: "POST",
          body: formData
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // if(data){
            //   reftch()
            // }
            dispatch({ type: REVIEW_SUCCESS, payload: data });
          })
        

       
       

    } catch (error) {
        dispatch({
            type: REVIEW_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });

    }


}
