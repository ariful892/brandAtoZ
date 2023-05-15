import React from 'react';
import { AiFillCaretDown, AiFillLike, AiOutlineLike, AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { RiMessengerFill } from 'react-icons/ri';
import { GiShoppingBag } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import brandAtoZ from '../../../assets/brand_A_To_z.jpg'
import { RiInstagramFill } from 'react-icons/ri';
import youtube from '../../../assets/icons/youtube-removebg-preview.png'
import { NavLink, Outlet } from 'react-router-dom';
import Shop from '../Shop';

const ShopHome = ({id}) => {

    const state = useSelector((state) => state);
    const { userInfo, loading2 } = useSelector((state) => state?.userSignin);
    const { userInfoRegister, loading1 } = useSelector((state) => state?.userRegister);

    if (loading1 || loading2) {
        return <div class="flex items-center justify-center">
            <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
            </div>
        </div>
    }

    let x=Math.floor((Math.random()*37)+7)

    return (
        <div>
            <div className='md:px-[220px]'>
                {
                    state?.user?.user?.map((s) => <>
                        <img className='w-full md:h-[400px]' src={`https://brandatoz.com${s?.seller?.sellerbannerimg.split(",")[0]}`} alt="" />
                        <div className='px-[10px] pt-[20px] x] '>
                            <div className='flex justify-between items-center md:items-end'>
                                <div className='flex justify-start items-center space-x-5 md:space-x-8'>
                                    <div className='h-[101px] w-[101px] md:h-[148px] md:w-[150px] md:mt-[-35px]   rounded-full border-4 border-blue-800'>
                                        <img className='h-[90px] w-[83px] md:h-[138px] md:w-[132px]  rounded-full ml-[6px] mt-[3.5px]' src={`https://brandatoz.com${s?.seller?.logo.split(",")[0]}`} alt="" />


                                    </div>
                                    <div className=' text-[12px] w-[150px] md:w-max  md:text-xl md:font-bold'>
                                        <p className='text-white'>{s.seller.shopName}</p>
                                        <div className='flex  justify-start items-center space-x-1 md:space-x-2 '>
                                       
                                 

                                     <span class="fa fa-star text-yellow-400"></span>
                                        <p className='text-slate-400 font-bold '>4.9</p>
                                            <p className='text-slate-400 font-bold'>(116)</p>
                                        <div className='text-white h-[20px] w-[20px] rounded-full flex justify-center items-center bg-[#40444b]'>
                                                <p className='text-black'>i</p>
                                            </div>
                                        <p className='text-slate-400 font-bold '>{s?.seller?.description}</p>

                                       {/* <div className='flex flex-col  my-[20px]'>
                                       <p className='text-white'>Shop Address: {s?.seller?.shopAddress}</p>
                                        <p className='text-white'>Seller Address: {s?.seller?.ownerAddress}</p>
                                        <p className='text-white'>Seller Email: {s?.email}</p>
                                        <p className='text-white'>Phone no: {s?.phnNo}</p>
                                       </div> */}

                                        <div className='mt-[22px] flex justify-start items-center space-x-6'>

                                            {/* <a href={s?.seller?.facebookLink}> <div className='h-[30px] w-[30px] rounded-full bg-blue-600 flex
                                                 justify-center items-center'>
                                                <FaFacebookF size={20} style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />

                                            </div></a>

                                            <a href={s?.seller?.youtubeLink}><img className='h-[30px] w-[30px]' src={youtube} alt="" /></a> */}


                                            {/* <RiInstagramFill size={20} style={{ color: '#FFFFFF', fill: '#FFFFFF' }} /> */}
                                            {(userInfo?.name || userInfoRegister?.name) && <><button className='px-4 py-1 bg-[#DE3D3A]  font-semibold text-[16px] leading-tight rounded-lg text-white'>Reel</button> </>}


                                        </div>

                                        </div>

                                    </div>

                                </div>

                                <div className=' '>
                                    <AiOutlineLike className='text-white md:hidden' size={45} />
                                    <p className='text-slate-400 font-bold ml-[5px] md:hidden'>like</p>
                                    <div className='hidden md:flex md:flex-col md:justify-center md:items-center  '>
                                        <div className=' hidden md:flex md:justify-between md:items-center md:px-[42px] md:py-[6px] md: bg-blue-700 text-red-700 md:rounded-[4px] md:space-x-2'>
                                            <RiMessengerFill style={{ color: '#FFFFFF', fill: '#FFFFFF' }} size={20} />
                                            <p className='text-white'>Send message</p>
                                        </div>
                                        <p className='hidden md:block md:text-slate-300 md:text-sm '> Hi Please let us know how we can help.</p>
                                    </div>
                                </div>



                            </div>
                            {/* <p className='hidden md:block md:text-slate-400 '> Hi! Please let us know how we can help.</p> */}


                            <div className='flex  justify-between  items-center my-[20px] md:hidden'>
                                <div>
                                    <div className=' flex justify-between items-center px-[45px] py-[8px] bg-blue-700 space-x-1 text-white rounded-[4px]'>
                                        <GiShoppingBag style={{ color: '#FFFFFF', fill: '#FFFFFF' }} size={20} />
                                        <p className='text-white'>View Products</p>
                                    </div>
                                </div>
                                <div className='px-[23px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px]'>
                                    <RiMessengerFill style={{ color: '#FFFFFF', fill: '#FFFFFF' }} size={20} />
                                </div>
                                {/* <div className='px-[20px] py-[8px] bg-[#454545] text-white flex justify-center items-center rounded-[4px]'> */}
                                    {/* <BsThreeDots style={{ color: '#FFFFFF', fill: '#FFFFFF' }} size={20} /> */}
                                    
                  
                                {/* </div> */}

                                <a href={s?.seller?.facebookLink}> <div className='h-[30px] w-[30px] rounded-full bg-blue-600 flex
                                                 justify-center items-center'>
                                                <FaFacebookF size={20} style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />

                                            </div></a>

                                            <a href={s?.seller?.youtubeLink}><img className='h-[40px] w-[40px]' src={youtube} alt="" /></a>
                            </div>


                            <div className='border-b-2 border-slate-400 pt-[18px] pb-[17px] flex justify-start items-center space-x-5 md:hidden'>
                                <div className='flex justify-start items-center'>
                                    <img className='h-[50px] w-[50px] rounded-full' src={brandAtoZ} alt="" />
                                    {/* <img className='h-[50px] w-[50px] rounded-full ml-[-6px] z-0' src='' alt="" /> */}
                                </div>
                                <div className=''>
                                    <p className='text-slate-400 font-bold'>Brand A To Z <span className='px-[3px] text-slate-400'>{x}</span> like this</p>
                                </div>

                               
                            </div>

                           

                            



                        </div>


                        <div className='hidden md:flex justify-between items-center md:px-[10px]  md:mt-[15px]' >
                            <div className='flex justify-start items-center space-x-1   md:space-x-5  font-semibold'>
                         
                                  
                                 <Shop></Shop>
                                <div className='flex justify-center items-center space-x-1'>

                                   {/* <NavLink to={`/about/${id}`} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-red-600' : undefined
                        }>
                                  <p className='text-white'>About</p>
                        </NavLink> */}
                                    {/* <AiFillCaretDown size={13} /> */}
                                </div>
                            </div>
                            <div className='flex justify-center items-center space-x-2'>
                                <div className='px-[20px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px] space-x-1 text-blue-600'>
                                    <AiFillLike style={{ color: '#FFFFFF', fill: '#FFFFFF' }} size={23} />
                                    <p className='font-semibold text-white'>Like</p>
                                </div>
                                <div className='px-[20px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px]'>
                                    <AiOutlineSearch style={{ color: '#FFFFFF', fill: '#FFFFFF' }} size={23} />
                                </div>
                                {/* <div className='px-[20px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px]'>
                                    <BsThreeDots className='text-white ' size={23} />
                                </div> */}

<a href={s?.seller?.facebookLink}> <div className='h-[30px] w-[30px] rounded-full bg-blue-600 flex
                                                 justify-center items-center'>
                                                <FaFacebookF size={20} style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />

                                            </div></a>

                                            <a href={s?.seller?.youtubeLink}><img className='h-[40px] w-[40px]' src={youtube} alt="" /></a>
                            </div>
                        </div>
                        
                       

                        <div className='flex justify-between items-center px-[15px] mt-[12px]  font-bold md:hidden'>
                       <Shop></Shop>
                            {/* <NavLink to={`/about/${id}`} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-red-600' : undefined
                        }>
                                  <p className='text-white'>About</p>
                        </NavLink> */}
                      
                        </div>

                    </>)
                }



            </div>

            <Outlet />

        </div>
    );
};

export default ShopHome;