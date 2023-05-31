import React from 'react';
import Shop from '../../Shop';
import Nav from '../../../Shared/Navbar/Nav';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createShopHomePAge } from '../../../../redux/actionCreators/shopHomepageActions';
import ShopHome from '../ShopHome';

const Photos = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createShopHomePAge(id))


    }, [dispatch, id])
    return (
        <div>


            <div className=' bg-black h-max'>
                <ShopHome></ShopHome>
                <div>
                    <div className='flex justify-center items-center min-h-screen'>
                        <h1 className='text-white text-2xl font-extrabold text-center'>Comming soon!</h1>
                    </div>

                </div>

            </div>

            <hr className='' />
        </div>

    );
};

export default Photos;