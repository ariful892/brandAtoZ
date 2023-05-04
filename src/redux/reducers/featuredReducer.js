import { FEATURED_CATEGORIES } from "../actionTypes/actionTypes";

const initialState = {
    featuredCategories: [],
};

const featuredReducer = (state = initialState, action) => {
    switch (action.type) {
        case FEATURED_CATEGORIES:
            return {
                ...state,
                featuredCategories: action.payload
            }
        default:
            return state;
    }
}

export default featuredReducer;