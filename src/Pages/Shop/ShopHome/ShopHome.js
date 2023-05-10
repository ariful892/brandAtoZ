import React from 'react';
import { AiFillCaretDown, AiFillLike, AiOutlineLike, AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { RiMessengerFill } from 'react-icons/ri';
import { GiShoppingBag } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import youtube from '../../../assets/icons/youtube-removebg-preview.png'

const ShopHome = () => {

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
                                        <div className='flex  justify-start items-center space-x-1 '>
                                        {/* <svg className="w-6 h-6  text-yellow-400  ml-[-7px] mr-[-5px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> */}
                                        {/* <p className='text-slate-400 font-bold '>4.9</p> */}
                                            {/* <p className='text-slate-400 font-bold'>(116)</p> */}
                                        {/* <div className='text-white h-[20px] w-[20px] rounded-full flex justify-center items-center bg-[#40444b]'>
                                                <p className='text-black'>i</p>
                                            </div> */}
                                        {/* <p className='text-slate-400 font-bold '>{s?.seller?.description}</p> */}

                                       <div className='flex flex-col  my-[20px]'>
                                       <p className='text-white'>Shop Address: {s?.seller?.shopAddress}</p>
                                        <p className='text-white'>Seller Address: {s?.seller?.ownerAddress}</p>
                                        <p className='text-white'>Seller Email: {s?.email}</p>
                                        <p className='text-white'>Phone no: {s?.phnNo}</p>
                                       </div>

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
                            <p className='hidden md:block md:text-slate-400 '> Hi! Please let us know how we can help.</p>


                            <div className='flex  justify-between  items-center my-[20px] md:hidden'>
                                <div>
                                    <div className=' flex justify-between items-center px-[40px] py-[8px] bg-blue-700 space-x-1 text-white rounded-[4px]'>
                                        <GiShoppingBag className='' size={20} />
                                        <p>View shop</p>
                                    </div>
                                </div>
                                <div className='px-[15px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px]'>
                                    <RiMessengerFill style={{ color: '#FFFFFF', fill: '#FFFFFF' }} size={20} />
                                </div>
                                {/* <div className='px-[20px] py-[8px] bg-[#454545] text-white flex justify-center items-center rounded-[4px]'> */}
                                    {/* <BsThreeDots style={{ color: '#FFFFFF', fill: '#FFFFFF' }} size={20} /> */}
                                    
                  
                                {/* </div> */}

                                <a href={s?.seller?.facebookLink}> <div className='h-[30px] w-[30px] rounded-full bg-blue-600 flex
                                                 justify-center items-center'>
                                                <FaFacebookF size={20} style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />

                                            </div></a>

                                            <a href={s?.seller?.youtubeLink}><img className='h-[30px] w-[30px]' src={youtube} alt="" /></a>
                            </div>


                            <div className='flex justify-start items-center space-x-5 md:hidden'>
                                <div className='flex justify-start items-center'>
                                    <img className='h-[50px] w-[50px] rounded-full z-10' src='' alt="" />
                                    <img className='h-[50px] w-[50px] rounded-full ml-[-6px] z-0' src='' alt="" />
                                </div>
                                <div>
                                    <p className='text-slate-400 font-bold'>Mahmud,Riana and 50880 others like this</p>
                                </div>
                            </div>



                        </div>


                        <div className='hidden md:flex justify-between items-center md:px-[10px] md:mt-[15px]' >
                            <div className='flex justify-start items-center space-x-1   md:space-x-5  font-semibold'>
                                <p className='text-white'>Home</p>
                                <p  className='text-white'>About</p>
                                <p  className='text-white'>Photos</p>
                                <p  className='text-white'>Groups</p>
                                <div className='flex justify-center items-center space-x-1'>
                                    <p  className='text-white'>More</p>
                                    <AiFillCaretDown size={13} />
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

                        <div className='flex justify-between items-center px-[15px] mt-[15px]  font-bold md:hidden'>
                            <p className='text-white'>Home</p>
                            <p className='text-white'>About</p>
                            <p className='text-white'>Posts</p>
                            <p className='text-white'>Reviews</p>
                            <p className='text-white'>Videos</p>
                            <p className='text-white'>Photos</p>
                        </div>

                    </>)
                }



            </div>

        </div>
    );
};

export default ShopHome;