import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import loadsProductsPagination, { loadAllProductsPagination } from '../../redux/actionCreators/productsWithPaginationAction';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Shared/Loading/Loading';
import ReactPaginate from 'react-paginate';
import loadsAllProducts from '../../redux/actionCreators/productsWithPaginationAction';
import { useQuery } from 'react-query';
import star from '../../assets/icons/Star.png';
import starLight from '../../assets/icons/starlight.png';
import './AllProducts.css'

const AllProducts = () => {

    const dispatch = useDispatch()
    const { loading1, paginated_products } = useSelector((state) => state?.pagination);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {

        dispatch(loadsAllProducts())

    }, [])

    const { isLoading, data: allProducts, refetch } = useQuery('details', () =>
        fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=1&seller=&name=&category=&min=0&max=0&rating=0&order=newest&flash_sale=`)
            .then(res => res.json())
    )

    const { isLoading2, data: categories } = useQuery('categories', () =>
        fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/add/category').then(res =>
            res.json()
        )
    )



    if (loading1 || isLoading || isLoading2) {
        return <Loading></Loading>
    }


    // console.log(paginated_products?.products.length)
    // console.log('All')
    // console.log(allProducts.products)
    console.log(categories)



    const handleClick = async (data) => {
        const number = data.selected + 1;
        // console.log(number)

        dispatch(loadAllProductsPagination(number))

    }

    // if (loading1) {
    //     return <Loading></Loading>
    // }


    return (

        <div className='all-products-filter-container'>

            {/* <h2 className='section-title '>All Products</h2> */}

            <div className='all-products-filter-mobile'>
                <select className='p-2 rounded-lg border-[1px] border-black w-full' name="" id="">
                    <option value="">Category</option>
                    {
                        categories.map(category => <option value="">{category}</option>)
                    }
                </select>

                <select className='p-2 rounded-lg border-[1px] border-black' name="" id="">
                    <option value="">Price</option>
                    <option value="">500 to 1000</option>
                    <option value="">1000 to 2000</option>
                    <option value="">2000 to 3000</option>
                </select>
                <select className='p-2 rounded-lg border-[1px] border-black' name="" id="">
                    <option value="">Rating</option>
                    <option value="">4stars & up</option>
                    <option value="">3stars & up</option>
                    <option value="">2stars & up</option>
                    <option value="">1star & up</option>
                </select>
                <select className='p-2 rounded-lg border-[1px] border-black' name="" id="">
                    <option value="">Newest Arrivals</option>
                    <option value="">Price: Low to High</option>
                    <option value="">Price: High to Low</option>
                    <option value="">Avg. Customer Reviews</option>
                </select>
            </div>

            <div>
                <div className='category-large'>
                    <select className='p-2 mb-5 rounded-lg border-[1px] border-black' name="" id="">
                        <option value="">Newest Arrivals</option>
                        <option value="">Price: Low to High</option>
                        <option value="">Price: High to Low</option>
                        <option value="">Avg. Customer Reviews</option>
                    </select>
                </div>
                <div className='flex'>

                    <div className='all-products-filter'>


                        <div className="mb-3">

                            <span className='font-bold text-lg'>Department</span>

                            <div className='mt-2 '>

                                {
                                    categories.map(category => <p className='font-medium text-[15px] text-black'>{category}</p>)
                                }


                            </div>

                        </div>

                        <div className="mb-3">

                            <span className='font-bold text-lg'>Price</span>

                            <div className='mt-2'>

                                <p className='font-medium text-[15px]'>Price</p>
                                <p className='font-medium text-[15px]'>500 to 1000</p>
                                <p className='font-medium text-[15px]'>1000 to 2000</p>
                                <p className='font-medium text-[15px]'>2000 to 3000</p>

                            </div>

                        </div>

                        <div className="">

                            <span className='font-bold text-lg'>Avg. Customer Review</span>

                            <div className='mt-2'>
                                <div className='flex items-center mb-3'>


                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                    </div>
                                </div>

                                <div className='flex items-center mb-3'>

                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>& up</span>
                                </div>

                                <div className='flex items-center mb-3'>

                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>& up</span>
                                </div>

                                <div className='flex items-center mb-3'>


                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>& up</span>
                                </div>
                                <div className='flex items-center'>


                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>& up</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <h1 className='text-2xl text-center text-red-700'>{paginated_products?.page}</h1> */}
                    {/* <h1 className='mt-[100px] text-red-700'>{number}</h1> */}

                    <div className='all-products-container'>
                        <div className='mx-3 lg:mx-5'>

                            <div className='flex justify-center'>
                                <div className="all-products">
                                    {
                                        paginated_products?.products?.map(p => <>
                                            <Link to={`/details/${p._id}`} className="single-product" >
                                                <div className='img-container'>
                                                    <img className='product-img' src={`https://brandatoz.com${p.image.split(",")[0]}`} alt="" />
                                                </div>
                                                <div className="product-details">
                                                    <p className='product-name'>{p.name}</p>
                                                    <p className='product-type'>Sit eu</p>
                                                    <h2 className='product-price'>BDT <span>{p.price}</span></h2>
                                                </div>
                                            </Link>
                                        </>

                                        )
                                    }


                                </div>
                            </div>


                        </div>



                        <div className=''>



                            <div className=' h-[150px] mt-[10px]  pt-[20px]'>


                                <ReactPaginate

                                    previousLabel={'<'}
                                    nextLabel={'>'}
                                    breakLabel={'...'}
                                    pageCount={8}
                                    onPageActive={handleClick}
                                    marginPagesDisplayed={7}
                                    pageRangeDisplayed={1}
                                    onPageChange={handleClick}
                                    forcePage={currentPage}
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


                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AllProducts;