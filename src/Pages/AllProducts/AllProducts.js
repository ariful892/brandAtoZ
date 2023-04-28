import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import loadsProductsPagination from '../../redux/actionCreators/productsWithPaginationAction';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Shared/Loading/Loading';

const AllProducts = () => {
    const {number}=useParams()
    const dispatch=useDispatch()
    const {loading1,paginated_products} = useSelector((state) => state?.pagination);

    useEffect(()=>{

        dispatch(loadsProductsPagination(number))
    },[number])

    if(loading1){
        return <Loading></Loading>
    }
    return (
        <div className='mt-[150px] md:mt-[80px]'>
            {/* <h1 className='mt-[100px] text-red-700'>{number}</h1> */}

            <div className='products-for-container mx-3 lg:mx-5'>
            <h2 className='section-title '>All Products</h2>
            <div className='flex justify-center'>
                <div className="for-you-products">
                    {
                       paginated_products?. products?.map(p => <>
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
            
        </div>
    );
};

export default AllProducts;