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


const SearchProducts = () => {

    const searchData = useSelector((state) => state.searchProduct);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(searchData)

    useEffect(() => {
        dispatch(loadSearchProducts(searchData.input))
    }, [])

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

    if (searchData.searchProducts.length) {
        content = <div >
            <h2 className='text-2xl text-center mb-8'>Items found: {searchData.searchProducts.length}</h2>

            <div className='flex justify-center'>
                <div className="s-products">
                    {
                        searchData.searchProducts.map(product =>
                            <div
                                key={product._id}
                                onClick={() => handleProductDetails(product._id)} className="s-product">
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

    if (!searchData.searchProducts.length) {
        content = <h2 className='text-2xl text-center mb-8'>No item found!</h2>
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

        </div>
    );
};

export default SearchProducts;