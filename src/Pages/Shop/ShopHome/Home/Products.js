import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
    const state = useSelector((state) => state?.productsReducer?.products?.products)
    return (
        <div className='md:px-[220px] my-[40px]'>
            <h1 className='text-center text-white text-[25px] my-[30px]'>Products of the Shop</h1>
            {state?.length === 0 && <><h1 className='text-center text-white text-[25px] '>There is no Products!!!</h1></>}
            <div className='grid grid-cols-2 md:grid-cols-5 gap-5 ' >
                {
                    state?.map((s) => <>
                        <div class="flex justify-center">
                            {<Link to={`/details/${s._id}`}>
                                <div class="rounded-lg shadow-lg bg-[#F4F8F9] md:w-[196px] w-[170px]">
                                    <a href="#!">
                                        <img class="rounded-t-lg h-[180px] object-cover w-[170px] md:h-[320px] md:w-[370px]  hover:opacity-70" src={`https://brandatoz.com${s?.image.split(",")[0]}`} alt="" />
                                    </a>
                                  


                                < div className="product-details">
                            <b><p className='product-name font-extrabold text-black'>{s.name}</p></b>
                            {/* <p className='product-type'>Sit eu</p> */}

                            <div className='flex justify-start items-center space-x-1'>
                                <span class="fa fa-star text-yellow-400"></span>
                                <p>0<span className='pl-[2px]'>(No Reviews)</span></p>

                            </div>






                            <div className='flex justify-start items-center space-x-4'>
                                <h2 className='text-red-600  font-extrabold text-[20px] '>৳  {s.price}  </h2>
                                {s.discounted_price && <del className='text-slate-400'>৳{s.discounted_price}</del>}

                            </div>


                        </div>
                    </div >
                            </Link>}
        </div>
                    </>)
                }

            </div >

        </div >
    );
};

export default Products;


  {/* <div class="p-6">
                                    <h5 className="text-white text-xl font-medium mb-2"><b className='text-white text-xl font-semibold'>Category</b>:{s.category}</h5>
                                    <p class="text-white text-sm ">
                                        <b className='text-white text-sm' >Name</b>:{s.name}
                                    </p>
                                    <p className="text-white  ">
                                        <b className='text-white text-sm '>Price</b>:${s.price}
                                    </p>
                                    <p className="text-white text-base ">
                                        {/* <b className='text-white text-sm'>Description</b>:{s.description} */}
                                        // </p>

                                        // </div> * /}