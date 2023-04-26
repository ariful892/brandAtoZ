import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadsideNavCategoryProductData from '../../redux/actionCreators/fetchSideNavCategoryProducts';


const CategoryProducts = () => {
    const products=useSelector((state)=>state?.sideNavCategoryProducts?.products[0]?.products)
    
    const dispatch=useDispatch()
    const {categoryProducts} =useParams()
    useEffect(()=>{
       dispatch(loadsideNavCategoryProductData(categoryProducts))
        

    },[dispatch])



    let content;

    if (products?.length) {
        content = <div >
            <h2 className='text-2xl text-center mb-8'>Items found: {products?.length}</h2>

            <div className='flex justify-center'>
                <div className="s-products">
                    {
                        products?.map(product =>
                            <div
                                key={product._id}
                                 className="s-product">
                                <img className='s-products-img' src={`https://brandatoz.com${product.image.split(",")[0]}`} alt="" />
                                <div className="product-detail-info">
                                    <h2 className='s-products-name'>{product.name}</h2>
                                    <p className='s-products-type'>{product.category}</p>

                                    {/* <div className="rating-container">
                                        <img className='rating' src={star} alt="" />
                                        <img className='rating' src={star} alt="" />
                                        <img className='rating' src={star} alt="" />
                                        <img className='rating' src={starlight} alt="" />
                                        <img className='rating' src={starlight} alt="" />
                                        <span className='ratings-value'>(5)</span>
                                        <img className='heart' src={heart} alt="" />
                                    </div> */}
                                    <p className='s-products-price'>BDT {product.price}</p>
                                </div>
                                <div className='text-center'>
                                    {/* <button className='s-add-cart-btn'>Add to Cart</button> */}
                                </div>

                            </div>)
                    }
                </div>
            </div>
        </div>
    }

    if (!products?.length) {
        content = <h2 className='text-2xl text-center mb-8'>No item found!</h2>
    }







    return (
        <div className=' search-product-container'>
            {/* <h1 className='text-red-400 text-3xl mt-[100px]'>{categoryProducts}</h1> */}
            {content}
            
        </div>
    );
};

export default CategoryProducts;