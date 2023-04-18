import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../../../redux/actionCreators/productsAction';
import { createShopHomePAge } from '../../../../redux/actionCreators/shopHomepageActions';
import ShopHome from '../ShopHome';
import Products from './Products';

const Seller = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createShopHomePAge(id))
        dispatch(getProducts(id))

    }, [dispatch, id])
    return (
        <div className='bg-black h-max '>
            <ShopHome></ShopHome>
            <Products></Products>
            <hr className='' />
        </div>
    );
};

export default Seller;