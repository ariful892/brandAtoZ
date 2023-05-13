import React, { useEffect } from 'react';
import Shop from '../../Shop';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createShopHomePAge } from '../../../../redux/actionCreators/shopHomepageActions';

const Live = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createShopHomePAge(id))
       

    }, [dispatch, id])
    return (
        <div className='pt-[30px] md:pt-[50px] bg-black h-max'>
                <Shop></Shop>
            <div>
            <div className='mt-[20px] py-[30px]'>
            <h1 className='text-white text-2xl font-extrabold text-center'>Comming soon!</h1>
            </div>
            
        </div>
            
        </div>
    );
};

export default Live;