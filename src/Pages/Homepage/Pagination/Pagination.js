import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import loadsProductsPagination from '../../../redux/actionCreators/productsWithPaginationAction';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
    const product = useSelector((state) => state?.pagination?.paginated_products[0]?.products);
    console.log(product)
    const dispatch=useDispatch()
    let number

    useEffect(()=>{

        dispatch(loadsProductsPagination(number))
    },[])


    const handleClick = async (data) => {
         number = data.selected + 1;

        dispatch(loadsProductsPagination(number))
        
        

        

    }
    




    return (
        <div className='mt-[100px]'>

            <div className='products-for-container mx-3 lg:mx-5'>
            <h2 className='section-title '>All Products</h2>
            <div className='flex justify-center'>
                <div className="for-you-products">
                    {
                        product?.map(p => <>
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

<div className=' h-[150px] mt-[10px]  pt-[20px]'>


<ReactPaginate

    previousLabel={'<'}
    nextLabel={'>'}
    breakLabel={'...'}
    pageCount={8}
    marginPagesDisplayed={2}
    pageRangeDisplayed={1}
    onPageChange={handleClick}
    containerClassName={'flex justify-center items-center mt-[20px]  space-x-2'}

    pageLinkClassName={'border-2 border-gray-400 px-[10px] rounded-full py-[7px]  md:px-[20px] md:rounded-full   md:py-[13px]  text-slate-700  text-[12px] md:text-2xl font-bold  transition-colors duration-150 bg-white    focus:shadow-outline '}

    // previousClassName={' px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'}
    previousLinkClassName={ 'rounded-full  border-2 border-gray-400 px-[10px] py-[7px] md:px-[20px] md:rounded-full   md:py-[13px]  text-slate-700  text-[12px] md:text-2xl font-bold  transition-colors duration-150 bg-white    focus:shadow-outline '}


    // nextClassName={'h-[20px] px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'}
    nextLinkClassName={'rounded-full   border-2 border-gray-400 px-[10px] py-[7px] md:px-[20px] md:rounded-full   md:py-[13px]  text-slate-700  text-[12px] md:text-2xl font-bold  transition-colors duration-150 bg-white    focus:shadow-outline '}
    // breakLinkClassName={'px-[20px] py-[10px] text-[#FFFFFF] transition-colors duration-150 bg-white  bg-[#333333]  focus:shadow-outline '}
    activeLinkClassName={' text-[#FFFFFF] transition-colors duration-150  border-none bg-blue-800 focus:shadow-outline'}











/>
</div>
            
            
        </div>
    );
};

export default Pagination;