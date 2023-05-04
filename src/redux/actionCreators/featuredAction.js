import { FEATURED_CATEGORIES } from "../actionTypes/actionTypes"


export const loadFeaturedCategories = (data) => {
    // console.log(data)
    return {
        type: FEATURED_CATEGORIES,
        payload: data,
    }
}