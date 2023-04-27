import { combineReducers } from "redux";
import { userRegisterReducer, userSigninReducer } from "./authReducer";
import navbarReducer from "./navbarReducer";
import { forProductsReducer } from "./productsForYouReducer";
import productsReducer from "./productsReducer";
import { reviewReducer } from "./reviewReducer";
import searchInputReducer from "./searchReducer";
import shopHompageReducer from "./shopHomepageReducer";
import shoppingMallReducer from "./shoppingMallReducer";
import categoryProducts from "./sideNavCategoryReducer";
import pagitedProducts from "./productsWithPaginationReducer";

const rootReducer = combineReducers({
    navbar: navbarReducer,
    forYouProducts: forProductsReducer,
    shoppingmall: shoppingMallReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    user: shopHompageReducer,
    productsReducer: productsReducer,
    searchProduct: searchInputReducer,
    reviews:reviewReducer,
    sideNavCategoryProducts:categoryProducts,
    pagination:pagitedProducts
});

export default rootReducer;