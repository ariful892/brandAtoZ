import React from 'react';
import './Shop.css'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Shop = () => {

    const id = useSelector((state) => state.user.id)


    return (
        <div className='' >

            {/* <!-- Navbar --> */}

            {/* <div className='shop-nav'>
                <NavLink
                    to={`/shop/home/${id}`}
                    className={({ isActive }) =>
                        isActive ? 'shop-nav-item-active' : 'shop-nav-item'
                    }
                >
                    Homepage
                </NavLink>
                <NavLink
                    to="/shop/products"
                    className={({ isActive }) =>
                        isActive ? 'shop-nav-item-active' : 'shop-nav-item'
                    }
                >
                    All Products
                </NavLink>
                <NavLink
                    to="/shop/profile"
                    className={({ isActive }) =>
                        isActive ? 'shop-nav-item-active' : 'shop-nav-item'
                    }
                >
                    Profile
                </NavLink>
               
            </div> */}


            <div className='flex justify-center items-center space-x-3'>
            <NavLink to={`/shop/home/${id}`} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
                        }>
                            <p className='text-white'>Home</p>
                        </NavLink>

                {/* <p className='text-white'>Live</p> */}
                <NavLink to={`/shop/live/${id}`} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
                        }>
                            <p className='text-white'>Live</p>
                        </NavLink>
                        <NavLink to={`/shop/photos/${id}`} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
                        }>
                            <p className='text-white'>Photos</p>
                        </NavLink>
                        <NavLink to={`/shop/videos/${id}`} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
                        }>
                            <p className='text-white'>Videos</p>
                        </NavLink>
                        <NavLink to={`/shop/reviews/${id}`} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
                        }>
                            <p className='text-white'>Reviews</p>
                        </NavLink>
                <NavLink to={`/shop/about/${id}`} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
                        }>
                            <p className='text-white'>About</p>
                        </NavLink>


            </div>








            <Outlet></Outlet>

        </div>
    );
};

export default Shop;