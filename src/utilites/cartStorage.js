import { toast } from "react-toastify";

// use local storage to manage cart data
const addToDb = cart => {

    // console.log(cart)

    localStorage.setItem('shopping-cart', JSON.stringify(cart));
    toast.success('Product is added');

}


const getStoredCart = () => {
    let shoppingCart = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
}

const removeFromDb = newCart => {
    // console.log(newCart)
    localStorage.setItem('shopping-cart', JSON.stringify(newCart));
}


const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}