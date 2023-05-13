import React from 'react';
import Shop from '../../Shop';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createShopHomePAge } from '../../../../redux/actionCreators/shopHomepageActions';
import ShopHome from '../ShopHome';

const Reviews = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createShopHomePAge(id))
       

    }, [dispatch, id])
    return (
        <div className=' bg-black h-max'>
       <ShopHome></ShopHome>
            <div className='mt-[50px] py-[30px]'>
               <h1 className='text-white text-2xl font-extrabold text-center'>Comming soon!</h1>
            </div>
            
        </div>
    );
};

export default Reviews;