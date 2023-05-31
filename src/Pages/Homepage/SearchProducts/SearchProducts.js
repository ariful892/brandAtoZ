import React, { useEffect } from 'react';
import './SearchProducts.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../../assets/icons/search.png';
import star from '../../../assets/icons/Star.png';
import starlight from '../../../assets/icons/starlight.png';
import heart from '../../../assets/icons/heart.png';
import { searchInput } from '../../../redux/actionCreators/searchAction';
import loadSearchProducts from '../../../redux/thunk/products/fetchSearchProducts';
import ReactPaginate from 'react-paginate';


const SearchProducts = () => {

    const searchData = useSelector((state) => state.searchProduct);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(searchData)

    useEffect(() => {
        dispatch(loadSearchProducts(searchData.input))
    }, [searchData.input])

    const handleProductDetails = (id) => {
        console.log(id)
        navigate(`/details/${id}`)
    }

    let searchText;

    const handleSearchInput = (e) => {
        searchText = e.target.value;
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // 👇 Get input value
            dispatch(searchInput(searchText))
            dispatch(loadSearchProducts(searchData.input))
            //   setUpdated(message);
        }
    };

    const handleSearch = () => {
        console.log(searchText)

        dispatch(searchInput(searchText))
    }

    let content;

    if (searchData?.searchProducts?.products?.length) {
        content = <div >
            <h2 className='text-2xl text-center mb-8'>Items found: {searchData?.searchProducts?.products?.length}</h2>

            <div className='flex justify-center'>
                {/* <div className="s-products"> */}
                <div className="for-you-products ">
                    {
                        searchData?.searchProducts?.products?.map(product =>
                            <div
                                key={product._id}
                                onClick={() => handleProductDetails(product._id)}
                                // className="s-product"
                                className="single-product  "
                            >
                                {/* <img className='s-products-img' src={`https://brandatoz.com${product.image.split(",")[0]}`} alt="" /> */}
                                <img className='product-img' src={`https://brandatoz.com${product.image.split(",")[0]}`} alt="" />
                                {/* <div className="product-detail-info"> */}
                                <div className="product-details">
                                    {/* <h2 className='s-products-name'>{product.name}</h2> */}
                                    <h2 className='product-name font-extrabold text-black'>{product.name}</h2>
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
                                    {/* <p className='s-products-price'>BDT {product.price}</p> */}
                                    <div className='flex  items-center space-x-4'>
                                        <h2 className='text-red-600  font-extrabold text-[20px] '>৳  {product.price}  </h2>
                                        {product.discounted_price && <del className='text-slate-400'>৳{product.discounted_price}</del>}

                                    </div>
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

    if (!searchData?.searchProducts?.products?.length) {
        content = <h2 className='text-2xl text-center mb-8'>No item found!</h2>
    }


    const handleClick = async (data) => {
        const number = data.selected + 1;
        console.log(number)
        dispatch(loadSearchProducts(searchData.input, number))



        // dispatch(loadsProductsPagination(number))






    }


    return (
        <div className=' search-product-container'>
            <div className='flex mb-8 mx-0 md:mx-12 lg:mx-24'>
                <input
                    onChange={handleSearchInput}
                    onKeyDown={handleKeyDown}
                    className='input-search' type="text" name='search' placeholder='Search' />
                <img onClick={handleSearch} className='search-btn' src={searchIcon} alt="" />
            </div>


            {content}



            {searchData?.searchProducts?.products?.length >= 50 && <div className='mt-[100px]'>



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

export default SearchProducts;