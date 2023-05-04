import { FETCHING_START, LOAD_FILTERED_SHOPS, LOAD_SHOPPING_MALLS, LOAD_SHOPS, SHOP_FILTER, SIDE_NAVBAR } from "../actionTypes/actionTypes"

export const sideNavbar = () => {
    return {
        type: SIDE_NAVBAR,
    }
}

export const loadShoppingMalls = (data) => {
    return {
        type: LOAD_SHOPPING_MALLS,
        payload: data,
    }
}

export const loadShops = (data) => {
    return {
        type: LOAD_SHOPS,
        payload: data,
    }
}

export const loadFilteredShops = (data) => {
    return {
        type: LOAD_FILTERED_SHOPS,
        payload: data,
    }
}

export const filterShop = (floor) => {
    return {
        type: SHOP_FILTER,
        payload: {
            floor: floor
        },
    }
}


export const loadingAction = () => {
    return {
        type: FETCHING_START,
    }
}

