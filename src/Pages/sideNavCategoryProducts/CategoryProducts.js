import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import loadsideNavCategoryProductData, { loadsideNavCategoryPaginatedProductData } from '../../redux/actionCreators/fetchSideNavCategoryProducts';
import Loading from '../Shared/Loading/Loading';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';


const CategoryProducts = () => {
    const navigate = useNavigate()
    const products = useSelector((state) => state?.sideNavCategoryProducts?.products[0]?.products)
    const pr = useSelector((state) => state?.sideNavCategoryProducts)
    const [loading, setLoading] = useState(false)
    // const products2=products[0]?.products
    // console.log(products,products2)



    const dispatch = useDispatch()
    const { categoryProducts } = useParams()
    useEffect(() => {
        dispatch(loadsideNavCategoryProductData(categoryProducts, loading, setLoading))


    }, [categoryProducts])
    const handleProductDetails = (id) => {
        console.log(id)
        navigate(`/details/${id}`)
    }




    if (loading) {
        return <Loading></Loading>



    }






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
                                onClick={() => handleProductDetails(product._id)}
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

    const handleClick = async (data) => {
        const number = data.selected + 1;
        console.log(number)
        // dispatch(loadSearchProducts(searchData.input,number))



        dispatch(loadsideNavCategoryPaginatedProductData(categoryProducts, number))






    }





    return (
        <div className=' search-product-container'>
            {/* <h1 className='text-red-400 text-3xl mt-[100px]'>{categoryProducts}</h1> */}
            {content}



            {products?.length&&<div className='mt-[100px]'>



                <div className=' h-[150px] mt-[10px]  pt-[20px]'>


                    <ReactPaginate

                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={8}
                        onPageActive={handleClick}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={1}
                        onPageChange={handleClick}
                        containerClassName={'flex justify-center items-center mt-[20px]  space-x-2'}

                        pageLinkClassName={'border-2 border-gray-400 px-[10px] rounded-full py-[7px]  md:px-[20px] md:rounded-full   md:py-[13px]  text-slate-700  text-[12px] md:text-2xl font-bold  transition-colors duration-150 bg-white    focus:shadow-outline '}

                        // previousClassName={' px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'}
                        previousLinkClassName={'rounded-full  border-2 border-gray-400 px-[10px] py-[7px] md:px-[20px] md:rounded-full   md:py-[13px]  text-slate-700  text-[12px] md:text-2xl font-bold  transition-colors duration-150 bg-white    focus:shadow-outline '}


                        // nextClassName={'h-[20px] px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'}
                        nextLinkClassName={'rounded-full   border-2 border-gray-400 px-[10px] py-[7px] md:px-[20px] md:rounded-full   md:py-[13px]  text-slate-700  text-[12px] md:text-2xl font-bold  transition-colors duration-150 bg-white    focus:shadow-outline '}
                        // breakLinkClassName={'px-[20px] py-[10px] text-[#FFFFFF] transition-colors duration-150 bg-white  bg-[#333333]  focus:shadow-outline '}
                        activeLinkClassName={' text-[#FFFFFF] transition-colors duration-150  border-none bg-blue-800 focus:shadow-outline'}











                    />
                </div>


            </div>}

        </div>
    );
};

export default CategoryProducts;