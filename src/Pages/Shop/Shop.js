import React from 'react';
import './Shop.css'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Shop = () => {

    const id = useSelector((state) => state.user.id)


    return (
        <div className='single-shop-container'>

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

            <Outlet></Outlet>

        </div>
    );
};

export default Shop;