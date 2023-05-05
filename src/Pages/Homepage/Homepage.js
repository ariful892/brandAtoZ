import React from 'react';
import Featured from './Featured/Featured';
import FlashSale from './FlashSale/FlashSale';
import HelloMall from './HelloMall/HelloMall';
import './Homepage.css'
import ProductsForYou from './ProductsForYou/ProductsForYou';
import ShoppingMalls from './ShoppingMalls/ShoppingMalls';
import TopSellers from './TopSellers/TopSellers';
import display from '../../assets/display-picture.png';
import Pagination from './Pagination/Pagination';

const Homepage = ({nav,setNav}) => {


    return (
        <div>
            {<div className={nav?'homepage-container opacity-40 overflow-hidden':'homepage-container'}>

                <img className='display-picture' src={display} alt="" />




                <ShoppingMalls></ShoppingMalls>

                <Featured></Featured>

                <ProductsForYou></ProductsForYou>

            </div>}

        </div>

    );
};

export default Homepage;