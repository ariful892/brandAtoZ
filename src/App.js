import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import ShoppingMall from './Pages/ShoppingMall/ShoppingMall';
import Shop from './Pages/Shop/Shop';
import AllProducts from './Pages/Shop/AllProducts/AllProducts';
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



function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='overflow-x-hidden'>
      <Provider store={store}>

        <ScrollToTop />
        {/* <Navbar modalOpen={modalOpen} setModalOpen={setModalOpen}></Navbar> */}
        <Nav modalOpen={modalOpen} setModalOpen={setModalOpen}></Nav>

        <Routes>
          <Route path='/' element={<Homepage></Homepage>}>
            <Route path='login' ></Route>
            <Route path='signup' ></Route>
          </Route>
          <Route path='mall/:mallName' element={<ShoppingMall></ShoppingMall>}></Route>
          <Route path='cart' element={<Carts></Carts>}></Route>
          <Route path='search' element={<SearchProducts></SearchProducts>}></Route>
          <Route path='details/:id' element={<SingleProductDetails></SingleProductDetails>}></Route>
          <Route path='shop' element={<Shop></Shop>}>
            {/* <Route path='home' element={<ShopHomePage></ShopHomePage>}></Route> */}
            <Route path='home/:id' element={<Seller></Seller>}></Route>
            <Route path='products' element={<AllProducts></AllProducts>}></Route>
            <Route path='profile' element={<Profile></Profile>}></Route>
          </Route>

        </Routes>
        <Footer></Footer>
        {/* </SIDENAV_CONTEXT.Provider> */}
      </Provider>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
