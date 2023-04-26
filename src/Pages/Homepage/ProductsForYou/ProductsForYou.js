import React, { useEffect, useState } from 'react';
import './ProductsForYou.css';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import SingleForYouProduct from './SingleForYouProduct/SingleForYouProduct';
import { useDispatch, useSelector } from 'react-redux';
import loadProductsForYouData from '../../../redux/thunk/products/fetchProductsForYouData';

const ProductsForYou = () => {


    const dispatch = useDispatch();
    const products = useSelector((state) => state.forYouProducts.products);

    console.log(products)

    useEffect(() => {
        dispatch(loadProductsForYouData())
    }, [dispatch])

    const { isLoading, error, data: allProducts } = useQuery('products', () =>
        fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/products/all_products').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(allProducts)

    // const forYouProducts = allProducts.products.slice(0, 16);

    return (
        <div className='products-for-container mx-3 lg:mx-5'>
            <h2 className='section-title'>Products For You</h2>

            <div className='flex justify-center'>
                <div className="for-you-products">
                    {
                        products.slice(0,50).map(product => <SingleForYouProduct
                            key={product._id}
                            product={product}
                        ></SingleForYouProduct>)
                    }


                </div>
            </div>
        </div>
    );
};

export default ProductsForYou;