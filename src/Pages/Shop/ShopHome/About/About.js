import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Shop from '../../Shop';
import googleMap from '../../../../assets/googleMap.jpg'
import { useEffect } from 'react';
import { createShopHomePAge } from '../../../../redux/actionCreators/shopHomepageActions';
import ShopHome from '../ShopHome';

const About = () => {
    // const id = useSelector((state) => state.user.id)
    const state = useSelector((state) => state);

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createShopHomePAge(id))
       

    }, [dispatch, id])
    return (
        <div >


            <div className=' bg-black h-max'>

            <ShopHome></ShopHome>
              

                <div className=''>
                    <img className='w-full h-[250px] md:h-screen' src={googleMap} alt="" />

                </div>

                <div className='pl-[50px] pr-[30px]'>
                    {
                        state?.user?.user?.map((s) => <>

                            <div className='flex flex-col text-[12px] md:text-2xl  '>
                                <p className='text-white'>Shop Address: {s?.seller?.shopAddress}</p>
                                <p className='text-white'>Seller Address: {s?.seller?.ownerAddress}</p>
                                <p className='text-white'>Seller Email: {s?.email}</p>
                                <p className='text-white'>Phone no: {s?.phnNo}</p>
                            </div>


                        </>)
                    }
                </div>



            </div>




        </div>
    );
};

export default About;