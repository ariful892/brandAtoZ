import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { getStoredCart, removeFromDb } from '../../../utilites/cartStorage';
import { loadCartProducts } from '../../../redux/actionCreators/cartAction';
import './SingleCart.css'
const SingleCart = (cart) => {


    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cartProduct.carts);

    console.log(carts);
    // const products = useSelector((state) => state.forYouProducts.cartProducts);

    console.log(cart)
    // console.log(cart.cart.productID)

    // useEffect(() => {
    //     dispatch(loadSingleProductData(cart.cart.productID))
    // }, [dispatch, cart.cart.productID])

    // const product = products.filter(p => p._id === cart.cart.productID);
    // console.log(product)

    const cartProduct = getStoredCart();
    // console.log(cartProduct);

    const removeProduct = () => {
        const newCart = carts.filter(c => c.productID !== cart.cart.productID);
        // console.log(newCart)
        dispatch(loadCartProducts(newCart))
        removeFromDb(newCart)
    }


    
    return (
        <div className="single-cart-container shadow-lg ">
        <div className='cart-info'>
            <div className="w-28 ">
                <img className='rounded-lg' src={cart?.cart?.image} alt="" />
            </div>


            <div className="ml-3 lg:ml-5 md:ml-5">
                <h2 className='text-xl font-bold mb-.5 w-48 lg:w-full md:w-full'>{cart?.cart?.name}</h2>
                {/* <p className='s-products-type'>{product.category}</p> */}

                <p className='text-md '>Color: {cart?.cart?.clr}</p>
                <p className='text-md '>Size: {cart?.cart?.sz}</p>

                <p className='text-md '>Quantity: {cart?.cart?.qty}</p>

                <p className='text-md mb-1'>Price: {cart?.cart?.price}</p>

                <Link to={`/checkout/${cart?.cart?.product}`} className=" font-medium uppercase bg-red-600 text-xs text-white h-6 px-3 py-1.5 rounded-md hover:bg-white hover:text-red-600 hover:border hover:border-red-600 ">Proceed to checkout</Link>
            </div>

        </div>
        <div className='mt-1 mr-1'>
            {/* < onClick={removeProduct} className='w-5 h-5 lg:w-8 lg:h-6 text-red icon'  /> */}
            <h1 onClick={removeProduct} className=''>DEete</h1>
            {/* <button className='font-semibold uppercase  text-xs text-white py-1 px-1  rounded-md hover:bg-red-600 flex items=center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button> */}


        </div>

    </div >
    );
};

export default SingleCart;