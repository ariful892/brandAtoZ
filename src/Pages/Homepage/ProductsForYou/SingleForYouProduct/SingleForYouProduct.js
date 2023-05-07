import { HeartIcon } from '@heroicons/react/24/solid';
import { blue } from '@mui/material/colors';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const SingleForYouProduct = ({ product }) => {
    const [state,setState]=useState(false)

    const navigate = useNavigate();
    const productImg = product.image.split(',');


    const showProductDetails = () => {
        // navigate(`/details/${product._id}`);
    }

    return (
        <Link to={`/details/${product._id}`} className="single-product relative" >
            <div onMouseMoveCapture={()=>setState(!state)} className='img-container '>
                <img className='product-img' src={`https://brandatoz.com${productImg[0]}`} alt="" />
            </div>


            <div className={!state?'absolute top-36 right-3 ':'hidden'}>
           <div className='h-[30px] w-[30px] flex justify-center items-center bg-white rounded-full'>
           <AiOutlineHeart  size={20} color={blue}/>
           </div>
           <div className='mt-2 h-[30px] w-[30px] flex justify-center items-center bg-white rounded-full'>
           <AiOutlineEye  size={20} color={blue}/>
           </div>

            </div>


            <div className="product-details">
               <b><p className='product-name font-extrabold text-black'>{product.name}</p></b> 
                {/* <p className='product-type'>Sit eu</p> */}

                <div className='flex justify-start items-center space-x-1'>
                <span class="fa fa-star text-yellow-400"></span>
                <p>0<span className='pl-[2px]'>(No Reviews)</span></p>

                </div>
               





                <div className='flex justify-start items-center space-x-4'>
                <h2 className='text-red-600  font-extrabold text-[20px] '>৳  {product.price}  </h2>
                 {product.discounted_price&&<del className='text-slate-400'>৳{product.discounted_price}</del>}

                </div>
              
               
            </div>
        </Link>
    );
};

export default SingleForYouProduct;