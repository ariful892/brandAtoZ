import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import SingleCart from './SingleCart/SingleCart';
import { getStoredCart } from '../../utilites/cartStorage';
import { loadCartProducts } from '../../redux/actionCreators/cartAction';
import { Link } from 'react-router-dom';
import './Cart.css'

const Carts = () => {

    // const [carts, setCarts] = useState([]);
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cartProduct.carts);
    const loading = useSelector((state) => state.forYouProducts.loading);

    // console.log('carts');
    console.log(carts);

    const cartProduct = getStoredCart();
    // console.log(cartProduct)
    let cartContent;
    useEffect(() => {
        // dispatch(loadingAction())
        dispatch(loadCartProducts(cartProduct))
    }, [dispatch])

    // if (loading) {
    //     return <Loading></Loading>
    // }


    if (carts.length) {
        cartContent = <div>
            <h2 className='text-2xl text-center mb-5'>Your added Product </h2>
            <div className=' w-full'>
                {
                    carts.map(cart => <SingleCart
                        key={cart._id}
                        cart={cart}
                    // carts={carts}
                    // setCarts={setCarts}
                    ></SingleCart>
                    )
                }
            </div>
        </div>
    }


    if (!cartProduct.length) {
        cartContent = <div className='flex justify-center items-center'>
            <h2 className='text-2xl text-center text-red-500 mb-5'>You have no product in the cart! <Link to={'/'} className='text-sm text-blue-500'>Buy Now</Link></h2>
        </div>
    }


    return (
        <div className='carts-container min-h-screen '>

        {cartContent}

        {/* <div>
        <h2 className='text-2xl text-center mb-5'>Products that you chose to purchase </h2>
        <div className='flex justify-center'>
            <div className="s-products">
                {
                    cartProduct.map(cart => <SingleCart
                        key={cart._id}
                        cart={cart}
                    ></SingleCart>
                    )
                }
            </div>
        </div>
    </div> */}
    </div>
    );
};

export default Carts;