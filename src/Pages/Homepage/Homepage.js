import React from 'react';
import Featured from './Featured/Featured';
import FlashSale from './FlashSale/FlashSale';
import HelloMall from './HelloMall/HelloMall';
import './Homepage.css'
import ProductsForYou from './ProductsForYou/ProductsForYou';
import ShoppingMalls from './ShoppingMalls/ShoppingMalls';
import TopSellers from './TopSellers/TopSellers';
import banner1 from '../../../src/assets/banner1.png'
import banner2 from '../../../src/assets/banner2.png'
import banner3 from '../../../src/assets/banner3.png'
import banner4 from '../../../src/assets/banner4.png'
import display5 from '../../assets/display-picture5.png';
import feedback2 from '../../assets/2.jpeg'
import seller2 from '../../assets/1.jpeg'
import picabo1 from '../../assets/Piacabo_icons/Affiliation.png'
import picabo2 from '../../assets/Piacabo_icons/C2S payment.png'
import picabo3 from '../../assets/Piacabo_icons/Cash on delivery.png'
import picabo4 from '../../assets/Piacabo_icons/Free Delivery.png'
import picabo5 from '../../assets/Piacabo_icons/Full Bangladesh delivery in three days.png'
import picabo6 from '../../assets/Piacabo_icons/Shopping malls.png'
import picabo7 from '../../assets/Piacabo_icons/pay after checking product.png'
import picabo8 from '../../assets/Piacabo_icons/product Inspection.png'
import picabo9 from '../../assets/Piacabo_icons/quality guaranteed.png'

import feedback from '../../assets/feedback.png';
import seller from '../../assets/seller.jpg';
// import Pagination from './Pagination/Pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper';

const Homepage = ({ nav, setNav }) => {

    // const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 768, itemsToShow: 1 },
    //     { width: 1200, itemsToShow: 1 },
    // ];


    return (
        <div>
            {<div className={nav ? 'homepage-container opacity-40 overflow-hidden' : 'homepage-container'}>

                <div className="banner-container">
                    <div className='carousel'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1800,
                                disableOnInteraction: false,
                            }}
                            speed={800}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='banner-text'>
                                    <img className='display-picture' src={banner1} alt="" />

                                    <div className='ml-5'>
                                        <h2 className='text-2xl lg:text-3xl font-bold mt-4'>Clearance up to 50% off</h2>
                                        <p className='mt-3 mb-8 text-black'>Huge savings on tech, toys, home & more!</p>
                                        <button className='px-4 py-1 border-2 border-black text-black font-extrabold rounded-3xl hover:bg-black hover:text-white'>Shop Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='banner-text rounded-lg'>
                                    <img className='display-picture' src={banner2} alt="" />

                                    <div className='ml-5'>
                                        <h2 className='text-2xl lg:text-3xl font-bold mt-4'>Clearance up to 50% off</h2>
                                        <p className='mt-3 mb-8 text-black'>Huge savings on tech, toys, home & more!</p>
                                        <button className='px-4 py-1 border-2 border-black text-black font-extrabold rounded-3xl hover:bg-black hover:text-white'>Shop Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='banner-text rounded-lg'>
                                    <img className='display-picture' src={banner3} alt="" />

                                    <div className='ml-5'>
                                        <h2 className='text-2xl lg:text-3xl font-bold mt-4'>Clearance up to 50% off</h2>
                                        <p className='mt-3 mb-8 text-black'>Huge savings on tech, toys, home & more!</p>
                                        <button className='px-4 py-1 border-2 border-black text-black font-extrabold rounded-3xl hover:bg-black hover:text-white'>Shop Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='banner-text rounded-lg'>
                                    <img className='display-picture' src={banner4} alt="" />

                                    <div className='ml-5'>
                                        <h2 className='text-2xl lg:text-3xl font-bold mt-4'>Clearance up to 50% off</h2>
                                        <p className='mt-3 mb-8 text-black'>Huge savings on tech, toys, home & more!</p>
                                        <button className='px-4 py-1 border-2 border-black text-black font-extrabold rounded-3xl hover:bg-black hover:text-white'>Shop Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                </div>

                <div className="px-3 py-5  mt-8">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        speed={800}
                        // centeredSlides={true}
                        freeMode={true}
                        autoplay={{
                            delay: 1200,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation, FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12 md:ml-8'>
                                <img className='w-24 mb-3' src={picabo1} alt="" />
                                <p className='text-xs lg:text-sm'>Affiliation</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12 md:ml-8'>
                                <img className='w-24 mb-3' src={picabo2} alt="" />
                                <p className='text-xs lg:text-sm'>C2S Payment</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12 md:ml-8'>
                                <img className='w-24 mb-3' src={picabo3} alt="" />
                                <p className='text-xs lg:text-sm'>Cash on delivery</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12 md:ml-8'>
                                <img className='w-24 mb-3' src={picabo4} alt="" />
                                <p className='text-xs lg:text-sm'>Free delivery</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12 md:ml-8'>
                                <img className='w-24 mb-3' src={picabo5} alt="" />
                                <p className='text-xs lg:text-sm'>Full Bangladesh delivery in three days</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12 md:ml-8'>
                                <img className='w-24 mb-3' src={picabo6} alt="" />
                                <p className='text-xs lg:text-sm'>Shopping malls</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12 md:ml-8'>
                                <img className='w-24 mb-3' src={picabo7} alt="" />
                                <p className='text-xs lg:text-sm'>Pay after checking product</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12 md:ml-8'>
                                <img className='w-24 mb-3' src={picabo8} alt="" />
                                <p className='text-xs lg:text-sm'>Products inspection</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12 md:ml-8'>
                                <img className='w-24 mb-3' src={picabo9} alt="" />
                                <p className='text-xs lg:text-sm'>Quality guarenteed</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <ShoppingMalls></ShoppingMalls>

                {/* <Featured></Featured> */}

                <ProductsForYou></ProductsForYou>


                <div className='my-24 mx-3 lg:mx-5 lg:flex md:flex items-center'>
                    <div className='w-full text-center mr-8' >
                        <div className="bg-white px-5 py-5 shadow-lg rounded-md">
                            <img className='w-36 mx-auto' src={feedback2} alt="" />
                            <h2 className='text-xl font-bold mt-2'>Give us your feedback!</h2>
                            <p className='mt-1'>Please help us to improve. Your feedback is important and helps us to grow more.</p>
                            <button className='btn-warning px-3 py-1 mt-3 rounded-lg font-semibold text-md'>Feedback</button>
                        </div>
                    </div>

                    <div className='w-full text-center mt-8 md:mt-0 lg:mt-0' >
                        <div className="bg-white px-5 py-5 shadow-lg rounded-md">
                            <img className='w-36 mx-auto' src={seller2} alt="" />
                            <h2 className='text-xl font-bold mt-2'>Become a seller!</h2>
                            <p className='mt-1'>Sell Online - Grow your business with BrandAtoZ, an online selling platform. Now sell products online & become a top e-commerce seller.</p>
                            <button className='btn-warning px-3 py-1 mt-3 rounded-lg font-semibold text-md'>Become Seller</button>
                        </div>
                    </div>
                </div>


                <div className='mb-32 mx-3 lg:mx-5 lg:flex md:flex items-center'>

                    <iframe className='w-full mr-8 p-2 bg-white rounded-md ' width="560" height="315" src="https://www.youtube.com/embed/gNRGkMeITVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen ></iframe>

                    <iframe className='w-full mt-8 md:mt-0 lg:mt-0 p-2 bg-white rounded-md border-[1px] border-black' width="560" height="315" src="https://www.youtube.com/embed/jDjvn_6qso8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>}

        </div>

    );
};

export default Homepage;