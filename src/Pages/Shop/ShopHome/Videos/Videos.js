
import React from 'react';
import Shop from '../../Shop';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createShopHomePAge } from '../../../../redux/actionCreators/shopHomepageActions';
import ShopHome from '../ShopHome';

const Videos = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createShopHomePAge(id))


    }, [dispatch, id])
    return (
        <div className=' bg-black h-max'>
            <ShopHome></ShopHome>

            <div>
                <div className='flex justify-center items-center min-h-screen'>
                    <h1 className='text-white text-2xl font-extrabold text-center '>Comming soon!</h1>
                </div>
            </div>

            <hr className='' />
        </div>
    );
};

export default Videos;