import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../../../Shared/Loading/Loading';
import './ProductDetails.css'

const ProductDetails = ({ product }) => {


    // console.log(productDetails);

    return (
        <div className='product-details-container'>
            <h2 className='details-title'>Product Details</h2>
            <div className='product-detail'>
                <div>
                    <p>Material</p>
                    <h2>Cotton</h2>
                </div>
                <div>
                    <p>Size</p>
                    <h2>{product?.size}</h2>
                </div>
                <div>
                    <p>Weight</p>
                    <h2>2.1 kg</h2>
                </div>
                <div>
                    <p>Color</p>
                    <h2>{product?.color}</h2>
                </div>
                <div>
                    <p>Pack size</p>
                    <h2>9x8x6 inch</h2>
                </div>
                <div>
                    <p>Rating</p>
                    <h2>4.6</h2>
                </div>
                <div>
                    <p>Services</p>
                    <h2>Cash on delivery</h2>
                </div>
            </div>
            <pre className='description'>{product.description}</pre>
        </div>
    );
};

export default ProductDetails;