import React, { useEffect, useState } from 'react';
import './ShoppingMalls.css'
import searchIcon from '../../../assets/icons/search.png';
import location2Icon from '../../../assets/icons/location2.png';
import sendIcon from '../../../assets/icons/Send.png';
import ticketIcon from '../../../assets/icons/Ticket.png';
import subtractIcon from '../../../assets/icons/Subtract.png';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import ctgMall1 from '../../../assets/Shopping-malls/sanmar.jpg';
import ctgMall2 from '../../../assets/Shopping-malls/afmi-plaza.png';
import ctgMall3 from '../../../assets/Shopping-malls/finlay.jpg';
import ctgMall4 from '../../../assets/Shopping-malls/new-market.jpg';
import ctgMall5 from '../../../assets/Shopping-malls/mimi-super-market.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from "react-elastic-carousel";
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import SingleMall from './SingleMall/SingleMall';
import { useDispatch, useSelector } from 'react-redux';
import loadShoppingMallData from '../../../redux/thunk/products/fetchShoppingMallData';
import { searchInput } from '../../../redux/actionCreators/searchAction';

// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Autoplay, Pagination, Navigation } from "swiper";


const ShoppingMalls = () => {

    const dispatch = useDispatch();
    const shoppingMalls = useSelector((state) => state.shoppingmall.shoppingMalls);
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/newshop')
    //         .then(res => res.json())
    //         .then(data => {
    //             setShoppingMalls(data);
    //             // console.log('mall: ' + data)
    //             setLoading(false);
    //         })
    // }, [])

    useEffect(() => {
        dispatch(loadShoppingMallData())
    }, [dispatch])

    let searchText;

    const handleSearchInput = (e) => {
        searchText = e.target.value;

        // console.log(searchText)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // 👇 Get input value
            dispatch(searchInput(searchText))
            navigate('/search')
            //   setUpdated(message);
        }
    };

    const handleSearch = () => {
        dispatch(searchInput(searchText))
        navigate('/search')
    }


    // const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 768, itemsToShow: 1 },
    //     { width: 1200, itemsToShow: 1 },
    // ];

    return (
        <div className='shopping-mall-container'>
            {/* <div className='search-box mt-8'>
                <input className='input-search' type="text" placeholder='Search' />
                <img className='search-btn' src={searchIcon} alt="" />
            </div> */}

            {/* <div className='search-filter-container mt-8 mx-3 lg:mx-5'>
                <div className='flex'>
                    <input
                        onChange={handleSearchInput}
                        onKeyDown={handleKeyDown}
                        className='input-search' type="text" name='search' placeholder='Search' />
                    <img onClick={handleSearch} className='search-btn' src={searchIcon} alt="" />
                </div>

                <div className='flex w-full'>
                <select className='location-select' name="" id="">
                    <option className='bg-white' value="">Farmgate</option>
                    <option className='bg-white' value="">Farmgate</option>
                    <option className='bg-white' value="">Farmgate</option>
                </select>

                <button className='advance-btn'>Advance Search</button>
            </div> */}


            <div className='title-country-select-container mx-3 lg:mx-5'>

                <h2 className='shopping-title'>Shopping Malls</h2>

                {/* <select className='location-select' name="" id="">
                    <option className='bg-white' value="">Dhaka Division</option>
                    <option className='bg-white' value="">Chattogram Division</option>
                </select> */}
            </div>


            <div>
                <h2 className='ml-3 lg:ml-5 mt-5 text-xl lg:text-2xl text-blue-600 font-semibold'>Dhaka Division</h2>
                <div className='w-full flex justify-center'>
                    <div className='shopping-mall'>
                        {
                            shoppingMalls.map(mall => <SingleMall
                                mall={mall}
                                key={mall._id}
                            ></SingleMall>)
                        }
                    </div>
                </div>
            </div>

            {/* ctg malls */}
            <div>
                <h2 className='ml-3 lg:ml-5 mt-3 text-xl lg:text-2xl text-blue-600 font-semibold'>Chattogram Division</h2>
                <div className='w-full flex justify-center'>
                    <div className='shopping-mall'>
                        <Link to={``} className='shop-container'>
                            <div className='shop-img-container'>
                                <img className='shop-img' src={ctgMall1} alt="" />

                                <div className='flex justify-center'>
                                    <div className="shop-info-detail">
                                        <div className='w-full mx-auto'>
                                            <h2 className='shop-name'>Sanmar Ocean City</h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to={``} className='shop-container'>
                            <div className='shop-img-container'>
                                <img className='shop-img' src={ctgMall2} alt="" />

                                <div className='flex justify-center'>
                                    <div className="shop-info-detail">
                                        <div className='w-full mx-auto'>
                                            <h2 className='shop-name'>Afmi Plaza</h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={``} className='shop-container'>
                            <div className='shop-img-container'>
                                <img className='shop-img' src={ctgMall3} alt="" />

                                <div className='flex justify-center'>
                                    <div className="shop-info-detail">
                                        <div className='w-full mx-auto'>
                                            <h2 className='shop-name'>Finlay Square</h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={``} className='shop-container'>
                            <div className='shop-img-container'>
                                <img className='shop-img' src={ctgMall4} alt="" />

                                <div className='flex justify-center'>
                                    <div className="shop-info-detail">
                                        <div className='w-full mx-auto'>
                                            <h2 className='shop-name'>New Market</h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={``} className='shop-container'>
                            <div className='shop-img-container'>
                                <img className='shop-img' src={ctgMall5} alt="" />

                                <div className='flex justify-center'>
                                    <div className="shop-info-detail">
                                        <div className='w-full mx-auto'>
                                            <h2 className='shop-name'>Mimi Super Market</h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

            {/* <div className='search-filter-container'>
                <div className='flex'>
                    <input className='input-search' type="text" placeholder='Search' />
                    <img className='search-btn' src={searchIcon} alt="" />
                </div>

                <select className='location-select' name="" id="">
                    <option className='bg-white' value="">Farmgate</option>
                    <option className='bg-white' value="">Farmgate</option>
                    <option className='bg-white' value="">Farmgate</option>
                </select>

                <button className='advance-btn'>Advance Search</button>
            </div> */}

            {/* <div className="banner-container">
                <Carousel breakPoints={breakPoints}>
                    <img className='banner' src={banner1} alt="" />
                    <img className='banner' src={banner2} alt="" />
                </Carousel>

            </div> */}
            {/* <div className="slider">
                <div className="selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
            </div> */}

            {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='banner' src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide> <img className='banner' src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='banner' src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide> <img className='banner' src={banner2} alt="" /></SwiperSlide>

            </Swiper> */}

            {/* <div className="shop-type mx-3 lg:mx-5">
                <div className="single-type">
                    <img className='shop-type-icon' src={location2Icon} alt="" />
                    <h2 className='shop-type-title'>Physical Shops</h2>
                    <p className='type-details'>A a aliquam odio sit sed leo, tellus morbi. Bibendum.</p>
                </div>

                <div className="single-type">
                    <img className='shop-type-icon' src={sendIcon} alt="" />
                    <h2 className='shop-type-title'>Online Shops</h2>
                    <p className='type-details'>Feugiat turpis eget nisi risus. Nullam convallis velit.</p>
                </div>

                <div className="single-type ">
                    <img className='shop-type-icon' src={ticketIcon} alt="" />
                    <h2 className='shop-type-title'>Hello Mall</h2>
                    <p className='type-details'>Feugiat turpis eget nisi risus. Nullam convallis velit ullamcorper.</p>
                </div>

                <div className="single-type">
                    <img className='shop-type-icon' src={subtractIcon} alt="" />
                    <h2 className='shop-type-title'>Brands</h2>
                    <p className='type-details'>Montes, dictumst tristique est lectus egestas pharetra.</p>
                </div>
            </div> */}
        </div>
    );
};

export default ShoppingMalls;