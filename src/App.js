import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import ShoppingMall from './Pages/ShoppingMall/ShoppingMall';
import Shop from './Pages/Shop/Shop';
import AllProducts from './Pages/Shop/AllProducts/AllProducts';
import AllProducts2 from './Pages/AllProducts/AllProducts';
import Profile from './Pages/Shop/Profile/Profile';
import SingleProductDetails from './Pages/Homepage/ProductsForYou/SingleProductDetails/SingleProductDetails';
import ScrollToTop from './Pages/ScrollToTop/ScrollToTop';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './Pages/Shared/Navbar/Nav';
import Seller from './Pages/Shop/ShopHome/Home/Seller';
import SearchProducts from './Pages/Homepage/SearchProducts/SearchProducts';
import Nav from './Pages/Shared/Navbar/Nav';
import Carts from './Pages/Carts/Carts';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryProducts from './Pages/sideNavCategoryProducts/CategoryProducts';
import MerchantRegister from './Pages/Login/SignUp/MerchantRegister/MerchantRegister';
import SellerSelectShopType from './Pages/Login/SignUp/SellerSelectShopType/SellerSelectShopType';
import SellerShopDetailsCreate from './Pages/Login/SignUp/SellerShopDetailsCreate/SellerShopDetailsCreate';
import UserProfile from './Pages/Login/UserProfile/UserProfile';
import Checkout from './Pages/Checkout/Checkout';
import About from './Pages/Shop/ShopHome/About/About';
import Photos from './Pages/Shop/ShopHome/Photos/Photos';
import Videos from './Pages/Shop/ShopHome/Videos/Videos';
import Live from './Pages/Shop/ShopHome/Live/Live';
import Reviews from './Pages/Shop/ShopHome/Reviews/Reviews';
import React, { useEffect } from 'react';
import { init } from 'react-facebook-pixel';
import { track } from 'react-facebook-pixel';
import ReactPixel from 'react-facebook-pixel';


function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [nav, setNav] = useState(false)
   const FB_PIXEL_ID = '551260690531020';
  const options = {
    autoConfig: true, // Auto-configure Pixel
    debug: false, // Enable debugging mode
  };
  
  ReactPixel.init(FB_PIXEL_ID, options);

useEffect(() => {
  ReactPixel.pageView();
 
}, []);




// ...

// useEffect(() => {
//   track('PageView');
// }, []);

  return (
    <div>
     {  <div className={nav?'overflow-x-hidden font-lato  ':'overflow-x-hidden font-lato'}>
      <Provider store={store}>

        <ScrollToTop />
        {/* <Navbar modalOpen={modalOpen} setModalOpen={setModalOpen}></Navbar> */}
        <Nav nav={nav} setNav={setNav} modalOpen={modalOpen} setModalOpen={setModalOpen}></Nav>

        <Routes>
          <Route path='/' element={<Homepage nav={nav} setNav={setNav}></Homepage>}>
            <Route path='login' ></Route>
            <Route path='signup' ></Route>
          </Route>
          <Route path='mall/:mallName' element={<ShoppingMall></ShoppingMall>}></Route>
          <Route path='cart' element={<Carts></Carts>}></Route>
          <Route path='checkout/:productID' element={<Checkout></Checkout>}></Route>
          <Route path='search' element={<SearchProducts></SearchProducts>}></Route>
          <Route path='sidenavCategory/:categoryProducts' element={<CategoryProducts></CategoryProducts>}></Route>
          <Route path='paginatedProducts' element={<AllProducts2></AllProducts2>}></Route>
          <Route path='merchantRegister' element={<MerchantRegister></MerchantRegister>}></Route>
          <Route path='sellerSelectShopType' element={<SellerSelectShopType></SellerSelectShopType>}></Route>
          <Route path='sellerShopDetailsCreate' element={<SellerShopDetailsCreate></SellerShopDetailsCreate>}></Route>
          <Route path='userProfile' element={<UserProfile></UserProfile>}></Route>
          <Route path='details/:id' element={<SingleProductDetails></SingleProductDetails>}></Route>
          
          <Route path='shop' element={<Shop></Shop>}>
            {/* <Route path='home' element={<ShopHomePage></ShopHomePage>}></Route> */}
            <Route path='home/:id' element={<Seller></Seller>}>
              
            </Route>
            <Route path='about/:id' element={<About></About>}></Route>
            <Route path='photos/:id' element={<Photos></Photos>}></Route>
            <Route path='videos/:id' element={<Videos></Videos>}></Route>
            <Route path='live/:id' element={<Live></Live>}></Route>
            <Route path='reviews/:id' element={<Reviews></Reviews>}></Route>
            <Route path='products' element={<AllProducts></AllProducts>}></Route>
            <Route path='profile' element={<Profile></Profile>}></Route>
          </Route>

        </Routes>
        <Footer></Footer>
        {/* </SIDENAV_CONTEXT.Provider> */}
      </Provider>

      <ToastContainer></ToastContainer>
    </div>}

    </div>
   
  );
}

export default App;
