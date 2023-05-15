import React, { useState } from 'react';
import './ShoppingMall.css'
import searchIcon from '../../assets/icons/search.png';
import floorIcon from '../../assets/icons/floor.png';
import expandIcon from '../../assets/icons/expand.png';
import categoryIcon from '../../assets/icons/Category.png';
import starIcon from '../../assets/icons/star-icon.png';
import star from '../../assets/icons/Star.png';
import starLight from '../../assets/icons/starlight.png';
import mallImg from '../../assets/Shopping-malls/malls1.png';
import shop1 from '../../assets/shops/shop1.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterShop, loadShops } from '../../redux/actionCreators/shoppingmallActions';
import loadShopData from '../../redux/thunk/products/fetchShopData';
import { createShopHomePAge } from '../../redux/actionCreators/shopHomepageActions';
import { getProducts } from '../../redux/actionCreators/productsAction';


const ShoppingMall = () => {

    const [filter, setFilter] = useState(false);
    const { mallName } = useParams();
    const [floor, setFloor] = useState(false);
    const [type, setTypes] = useState(false);
    const [rating, setRating] = useState(false);
    const navigate = useNavigate();
    const [floorNo, setFloorNo] = useState(false);
    // const [allSellers, setAllSellers] = useState([]);
    const dispatch = useDispatch();
    const allSellers = useSelector((state) => state.shoppingmall.filteredShops);

    // console.log(allSellers)
    // const { isLoading, error, data: allSellers, refetch } = useQuery('sellers', () =>
    //     fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/users/all-sellers').then(res =>
    //         res.json()
    //     )
    // )

    // useEffect(() => {
    //     fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/users/all-sellers')
    //         .then(res => res.json())
    //         .then(data => dispatch(loadShops(data)))
    // }, [dispatch])

    useEffect(() => {
        dispatch(loadShopData(mallName))
    }, [dispatch, mallName])

    // const shops = allSellers.filter(seller => seller.seller.marketName === mallName);

    // const [filterFloor, setFilterFloor] = useState(allSellers);



    // const shopClick = (id) => {
    //     dispatch(createShopHomePAge(id))
    //     dispatch(getProducts(id))
    //     navigate(`/shop/home/${id}`)



    // }
    console.log(floorNo);
    let shopContent;

    // if (allSellers && !floorNo) {
    //     setFilterFloor(allSellers);
    // }



    const handleFloorFilter = (floor) => {
        // const data = { allSellers, floor }

        dispatch(filterShop(floor))
        // shopContent = allSellers.filter(shop => shop.seller.floorNo === floor);
        // .map(shop =>
        //     <Link
        //         to={`/shop/home/${shop._id}`}
        //         // onClick={() => shopClick(shop._id)}
        //         className="shop"
        //         key={shop._id}
        //     >
        //         <img className='shop-image' src={`https://brandatoz.com${shop.seller.logo.split(",")[0]}`} alt="" />
        //         <div className="shop-details">
        //             <h2 className='shop-title'>{shop.seller.shopName}</h2>
        //             <p className='type'>{shop.seller.description}</p>
        //             <div className=' shop-floor'>
        //                 <img className='floor-icon' src={floorIcon} alt="" />
        //                 <span className='floor-no'>Floor no <span>{shop.seller.floorNo}</span></span>
        //             </div>
        //         </div>
        //     </Link>)


        // console.log(allSellers.filter(shop => shop.seller.floorNo === floor))
        // console.log(floor)

        // setFilterFloor(shopContent);

    }


    return (
        <div className='shopping-container'>
            <div className='mall-name-img-container '>
                <div className='lg:w-1/2 md:w-1/2'>
                    <h2 className='page-title'>Shopping Malls</h2>
                    <h2 className='mall-name'>{mallName}</h2>
                    <p className='mall-address'>KA-244, Kuril, Progoti Shoroni, Dhaka</p>

                    <div className='flex'>
                        <button className='follow-btn'>Follow</button>
                        <button className='block-btn'>Block</button>
                    </div>
                </div>
                <div className='lg:w-1/2 md:w-1/2'>
                    <img className='mall-img' src={`https://brandatoz.com/images/dokans/${mallName.split(" ").join("_")}.png`} alt="" />
                </div>
            </div>

            <div className="filter-shops-container">
                <div className='filter-container'>

                    <div className='filter-title-container-mobile border-2 border-gray-400 px-1 rounded-t-md'>
                        <div onClick={() => setFilter(!filter)} className='flex justify-between '>
                            <h2 className='filter-title-mobile'>Filters</h2>
                            <img className='expand-icon mt-3' src={expandIcon} alt="" />
                        </div>
                    </div>
                    <h2 className='filter-title'>Filters</h2>

                    <div className={`${!filter ? 'home-filter' : 'mobile-home-filter'}`}>
                        <div className="filter">
                            <div onClick={() => setFloor(!floor)} className=' filter-type-container'>
                                <div className='flex items-center'>
                                    <img className='filter-icon' src={floorIcon} alt="" />
                                    <span className='filter-type'>Floor</span>
                                </div>
                                <img className='expand-icon' src={expandIcon} alt="" />
                            </div>

                            {floor && <div>
                                <div
                                    className='flex items-center mb-3'>
                                    <input onClick={() => handleFloorFilter('all')} className='checkbox-icon' type="radio" name="floor" id="" />
                                    <span className='filter-value'>All</span>
                                </div>
                                <div
                                    className='flex items-center mb-3'>
                                    <input onClick={() => handleFloorFilter('0')} className='checkbox-icon' type="radio" name="floor" id="" />
                                    <span className='filter-value'>1st</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input onClick={() => handleFloorFilter('1')} className='checkbox-icon' type="radio" name="floor" id="" />
                                    <span className='filter-value'>2nd</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input onClick={() => handleFloorFilter('2')
                                    } className='checkbox-icon' type="radio" name="floor" id="" />
                                    <span className='filter-value'>3rd</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input onClick={() => handleFloorFilter('3')} className='checkbox-icon' type="radio" name="floor" id="" />
                                    <span className='filter-value'>4th</span>
                                </div>
                                <div className='flex items-center'>
                                    <input onClick={() => handleFloorFilter('4')
                                    } className='checkbox-icon' type="radio" name="floor" id="" />
                                    <span className='filter-value'>5th</span>
                                </div>
                            </div>}

                        </div>

                        <div className="filter">
                            <div onClick={() => setTypes(!type)} className=' filter-type-container'>
                                <div className='flex'>
                                    <img className='filter-icon' src={categoryIcon} alt="" />
                                    <span className='filter-type'>Type</span>
                                </div>
                                <img className='expand-icon' src={expandIcon} alt="" />
                            </div>

                            {type && <div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Mobile</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Sports</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Accessories</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Dress</span>
                                </div>
                                <div className='flex items-center'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Laptop</span>
                                </div>
                            </div>}

                        </div>

                        <div className="filter">
                            <div onClick={() => setRating(!rating)} className=' filter-type-container'>
                                <div className='flex'>
                                    <img className='filter-icon' src={starIcon} alt="" />
                                    <span className='filter-type'>Rating</span>
                                </div>
                                <img className='expand-icon' src={expandIcon} alt="" />
                            </div>

                            {rating && <div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />

                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                    </div>
                                </div>

                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />
                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>and up</span>
                                </div>

                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />
                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>and up</span>
                                </div>

                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />

                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>and up</span>
                                </div>
                                <div className='flex items-center'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />

                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>and up</span>
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>

                <div className='shops-container'>
                    <div className='search-box'>
                        <input className='input-search' type="text" placeholder='Search' />
                        <img className='search-btn' src={searchIcon} alt="" />
                    </div>

                    <div className='w-full flex justify-center'>
                        <div className="shops">
                            {
                                allSellers.map(shop =>
                                    <Link
                                        to={`/shop/home/${shop._id}`}
                                        // onClick={() => shopClick(shop._id)}
                                        className="shop"
                                        key={shop._id}
                                    >
                                        <img className='shop-image' src={`https://brandatoz.com${shop.seller.logo.split(",")[0]}`} alt="" />
                                        <div className="shop-details">
                                            <h2 className='shop-title'>{shop.seller.shopName}</h2>
                                            <p className='type'>{shop.seller.description}</p>
                                            <div className=' shop-floor'>
                                                <img className='floor-icon' src={floorIcon} alt="" />
                                                <span className='floor-no'>Floor no <span>{shop.seller.floorNo}</span></span>
                                            </div>
                                        </div>
                                    </Link>)

                            }
                        </div>
                    </div>

                    {allSellers.length > 1 &&
                        <div className='text-center'>
                            <button className='load-btn'>Load More</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ShoppingMall;