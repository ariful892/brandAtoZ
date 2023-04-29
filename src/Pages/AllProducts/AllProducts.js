import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import loadsProductsPagination, { loadAllProductsPagination } from '../../redux/actionCreators/productsWithPaginationAction';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Shared/Loading/Loading';
import ReactPaginate from 'react-paginate';
import loadsAllProducts from '../../redux/actionCreators/productsWithPaginationAction';

const AllProducts = () => {
  
    const dispatch = useDispatch()
    const { loading1, paginated_products } = useSelector((state) => state?.pagination);
    const [currentPage, setCurrentPage] = useState(1); 
    

    useEffect(() => {

        
            dispatch(loadsAllProducts())

        

        
           

        
       
    }, [])


    
    const handleClick = async (data) => {
       const number = data.selected + 1;
        console.log(number)

        

       dispatch(loadAllProductsPagination(number))

       

   }

   if(loading1){
    return <Loading></Loading>
   }

   
    return (
        <div className='mt-[150px] md:mt-[80px]'>

            {/* <h1 className='text-2xl text-center text-red-700'>{paginated_products?.page}</h1> */}
            {/* <h1 className='mt-[100px] text-red-700'>{number}</h1> */}

            <div className='products-for-container mx-3 lg:mx-5'>
                <h2 className='section-title '>All Products</h2>
                <div className='flex justify-center'>
                    <div className="for-you-products">
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
    );
};

export default AllProducts;