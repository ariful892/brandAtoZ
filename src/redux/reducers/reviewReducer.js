import { REVIEW_FAIL, REVIEW_REQUEST, REVIEW_SUCCESS } from "../actionTypes/actionTypes";



const initialState = {
    review:[]
}
export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEW_REQUEST:
            return { loading1: true };
        case REVIEW_SUCCESS:
            return { loading1: false,
                    ...state,
                    review:action.payload };
        case REVIEW_FAIL:
            return { loading1: false, error: action.payload };
        
        default:
            return state;
    }
};