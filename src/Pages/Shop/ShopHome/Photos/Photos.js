import React from 'react';
import Shop from '../../Shop';
import Nav from '../../../Shared/Navbar/Nav';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createShopHomePAge } from '../../../../redux/actionCreators/shopHomepageActions';

const Photos = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createShopHomePAge(id))
       

    }, [dispatch, id])
    return (
        <div>
           

<div className='pt-[30px] md:pt-[50px] bg-black h-max'>
                <Shop></Shop>
            <div>
            <div className='mt-[20px] py-[30px]'>
            <h1 className='text-white text-2xl font-extrabold text-center'>Comming soon!</h1>
            </div>
            
        </div>
            
        </div>

        </div>
       
    );
};

export default Photos;