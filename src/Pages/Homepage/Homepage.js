import React from 'react';
import Featured from './Featured/Featured';
import FlashSale from './FlashSale/FlashSale';
import HelloMall from './HelloMall/HelloMall';
import './Homepage.css'
import ProductsForYou from './ProductsForYou/ProductsForYou';
import ShoppingMalls from './ShoppingMalls/ShoppingMalls';
import TopSellers from './TopSellers/TopSellers';
import display from '../../assets/display-picture.png';
import display2 from '../../assets/display-picture2.png';
import display3 from '../../assets/display-picture3.png';
import display4 from '../../assets/display-picture4.png';
import display5 from '../../assets/display-picture5.png';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.jpg';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
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
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='banner-text'>
                                    <img className='display-picture' src={display} alt="" />

                                    <div className='ml-5'>
                                        <h2 className='text-2xl lg:text-3xl font-bold mt-4'>Clearance up to 50% off</h2>
                                        <p className='mt-3 mb-8 text-black'>Huge savings on tech, toys, home & more!</p>
                                        <button className='px-4 py-1 border-2 border-black text-black font-extrabold rounded-3xl hover:bg-black hover:text-white'>Shop Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='banner-text rounded-lg'>
                                    <img className='display-picture' src={display2} alt="" />

                                    <div className='ml-5'>
                                        <h2 className='text-2xl lg:text-3xl font-bold mt-4'>Clearance up to 50% off</h2>
                                        <p className='mt-3 mb-8 text-black'>Huge savings on tech, toys, home & more!</p>
                                        <button className='px-4 py-1 border-2 border-black text-black font-extrabold rounded-3xl hover:bg-black hover:text-white'>Shop Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='banner-text rounded-lg'>
                                    <img className='display-picture' src={display3} alt="" />

                                    <div className='ml-5'>
                                        <h2 className='text-2xl lg:text-3xl font-bold mt-4'>Clearance up to 50% off</h2>
                                        <p className='mt-3 mb-8 text-black'>Huge savings on tech, toys, home & more!</p>
                                        <button className='px-4 py-1 border-2 border-black text-black font-extrabold rounded-3xl hover:bg-black hover:text-white'>Shop Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='banner-text rounded-lg'>
                                    <img className='display-picture' src={display4} alt="" />

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

                <div className="px-3 py-5 bg-white mt-8">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        speed={1000}
                        // centeredSlides={true}
                        freeMode={true}
                        autoplay={{
                            delay: 2500,
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
                            <div className='ml-0 lg:ml-12'>
                                <img className='w-24 mb-3' src={logo1} alt="" />
                                <p className='text-xs lg:text-sm'>EASY RETURNS</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12'>
                                <img className='w-24 mb-3' src={logo2} alt="" />
                                <p className='text-xs lg:text-sm'>EASY RETURNS</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12'>
                                <img className='w-24 mb-3' src={logo3} alt="" />
                                <p className='text-xs lg:text-sm'>EASY RETURNS</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12'>
                                <img className='w-24 mb-3' src={logo4} alt="" />
                                <p className='text-xs lg:text-sm'>EASY RETURNS</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12'>
                                <img className='w-24 mb-3' src={logo5} alt="" />
                                <p className='text-xs lg:text-sm'>EASY RETURNS</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='ml-0 lg:ml-12'>
                                <img className='w-24 mb-3' src={logo6} alt="" />
                                <p className='text-xs lg:text-sm'>EASY RETURNS</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <ShoppingMalls></ShoppingMalls>

                {/* <Featured></Featured> */}

                <ProductsForYou></ProductsForYou>

            </div>}

        </div>

    );
};

export default Homepage;