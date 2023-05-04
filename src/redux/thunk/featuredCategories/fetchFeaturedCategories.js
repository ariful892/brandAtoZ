import { loadFeaturedCategories } from "../../actionCreators/featuredAction";


const loadFeaturedCategoriesData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://backend.dokanbhai.dokanbhai.com:3002/api/add/category");
        const data = await res.json();

        // console.log(data)
        if (data.length) {
            dispatch(loadFeaturedCategories(data));
        }
    }
}

export default loadFeaturedCategoriesData;