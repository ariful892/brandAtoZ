import React, { useState } from 'react';
import './SingleProductDetails.css';
import ProductInfo from './ProductInfo/ProductInfo';
import QandA from './QandA/QandA';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Reviews from './Reviews/Reviews';

const SingleProductDetails = () => {
    
    return (
        <div className='products-info-container'>
            <div>
                <ProductInfo></ProductInfo>
               
                <Reviews></Reviews>
                <QandA></QandA>
                <RelatedProducts></RelatedProducts>
            </div>
        </div>
    );
};

export default SingleProductDetails;