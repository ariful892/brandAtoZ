import React from 'react';
import location2Icon from '../../../../assets/icons/location2.png';
import sendIcon from '../../../../assets/icons/Send.png';
import { useNavigate } from 'react-router-dom';

const SellerSelectShopType = () => {

    const navigate=useNavigate()


    const handleGetStarted=()=>{
        navigate('/sellerShopDetailsCreate')

    }


    return (
        <div className='mt-[100px] px-[100px]'>
            <div className='font-extrabold md:text-3xl text-xl'>
                <h1 className='text-black' >Setup Your</h1>
                <h1 className='text-black' >Marchant <span className='ml-[10px]'> Account</span></h1>
            </div>


            <div className="shop-type flex justify-center  items-center  pt-[35px] md:pt-[0px] mb-[50px]">
                <div className="single-type drop-shadow-2xl ">
                    <img className='shop-type-icon' src={location2Icon} alt="" />
                    <h2 className='shop-type-title '>Physical Shops Owner</h2>
                    <p className='type-details'>About Physical Shop.</p>
                    <button onClick={handleGetStarted} class="btn btn-outline btn-sm btn-warning mt-[20px]">Get Started</button>
                </div>

                <div className="single-type drop-shadow-2xl">
                    <img className='shop-type-icon' src={sendIcon} alt="" />
                    <h2 className='shop-type-title'>Wholesale Shops Owner</h2>
                    <p className='type-details'>About Wholesale Shop.</p>
                    <button onClick={handleGetStarted} class="btn btn-outline btn-sm btn-warning mt-[20px]">Get Started</button>
                </div>

               
            </div>
            
        </div>
    );
};

export default SellerSelectShopType;