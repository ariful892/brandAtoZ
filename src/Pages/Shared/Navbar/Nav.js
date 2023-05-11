import React, { useEffect, useState } from 'react';
// import 'tw-elements';

import { Bars2Icon, Bars3Icon, CameraIcon, ChevronDownIcon, ClockIcon, FolderMinusIcon, HeartIcon, MagnifyingGlassIcon, MicrophoneIcon, ShoppingBagIcon, TicketIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { AiFillHome } from 'react-icons/ai';
import { DocumentTextIcon, ChatBubbleOvalLeftEllipsisIcon, BellIcon, ShoppingCartIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { VscHome } from 'react-icons/vsc';
import { MdArrowDropDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
// import { createList } from '../../../redux/actionCreators/sidebarAction';
import {

    Route,
    Link,
    Routes,
    Navigate,
    useNavigate

} from "react-router-dom";
import Modal from '../../Login/LoginModal/Modal';
import brandA_To_Z from '../../../assets/brand_A_To_z-removebg-preview.png'
import { signout } from '../../../redux/actionCreators/authActions';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import { searchInput } from '../../../redux/actionCreators/searchAction';
import { useRef } from 'react';
import Mycontext from '../../../../src/Mycontext';
import Login from '../../Login/Login/Login';
import { useContext } from 'react';


const Nav = ({nav,setNav, modalOpen, setModalOpen }) => {

    // const { nav2, setNav2 } = useContext(Mycontext);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const [nav2, setNav2] = useState(false)
    const [nav3, setNav3] = useState(false)
    const searchRef = useRef(null)
    const { userInfo, loading2 } = useSelector((state) => state?.userSignin);

    const { userInfoRegister, loading1 } = useSelector((state) => state?.userRegister);

    // const state = useSelector((state) => state?.list?.list)
    // console.log(state);

    // useEffect(() => {
    //     dispatch(createList())
    // }, [])

    const { isLoading, error, data: featuredCategories } = useQuery('categories', () =>
        fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/add/category').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleNav = () => {
        setNav(!nav)
       


    }


    const signOutHandler = () => {
        dispatch(signout())
        navigate('/')

    }

    const handleNav2 = () => {
        setNav3(!nav3)

    }


    if (loading1 || loading2) {
        return <div class="flex items-center justify-center">
            <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
            </div>
        </div>
    }



    let searchText;

    const handleSearchInput = (e) => {
        searchText = e.target.value;

        // console.log(searchText)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // 👇 Get input value
            dispatch(searchInput(searchText))
            setNav3(!nav3)

            navigate('/search')
            searchRef.current.value = "";

            //   setUpdated(message);
        }
    };

    const handleSearch = () => {
        dispatch(searchInput(searchText))
        setNav3(!nav3)
        navigate('/search')
        searchRef.current.value = "";
    }


    const handleSideNavCategory = (categoryName) => {
        navigate(`/sidenavCategory/${categoryName}`)
        setNav(!nav)




    }

    const handleUserProfile = () => {
        navigate('/userProfile')

    }



    return (
        <div>
        <div className='w-screen h-[42px] md:h-[72px] fixed z-10 bg-[#FFFFFF]  drop-shadow-[0_3px_5px_rgba(0,0,0,0.07)]'>
            {modalOpen && <Modal setOpenModal={setModalOpen}></Modal>}

          

            {<div className='px-[5px]  md:px-[24px] flex justify-between items-center w-full h-full  '>
                <div className='flex items-center justify-start md:space-x-4 space-x-2'>
                    <div onClick={handleNav} className='hidden   md:w-[35px] md:h-[35px] bg-[#F0F5FA] md:flex justify-center items-center rounded-full cursor-pointer'>
                        <Bars3BottomLeftIcon className="h-6 w-6 " />

                    </div>

                    <Link to='/'><div className='flex flex-col justify-between items-center'>
                        <img className='h-[65px] w-[60px]  md:h-[100px] md:w-[150px]' src={brandA_To_Z} alt="" />
                        {/* <p className='text-[10px]  md:text-[14px]'>Easy Shopping</p> */}
                    </div></Link>

                </div>

                <div className='hidden   md:flex space-x-10'>
                    <AiFillHome style={{ color: '#000000', fill: '#000000' }} size={25} />
                    <DocumentTextIcon className="h-6 w-6 " />
                    <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 " />
                    <BellIcon className="h-6 w-6 " />
                    <Link to={'/cart'} className="h-6 w-6 "><ShoppingCartIcon /></Link>
                    {userInfo?.isSeller && <><button type="button" className='px-6
            py-2.5
            bg-[#D1DEEB]
            
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B]'>Seller</button></>}
                    {userInfo?.isAdmin && <><button type="button" className='px-6
            py-2.5
            bg-[#D1DEEB]
             
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B]'>Admin</button></>}
                    {(userInfo && <> <div className='flex justify-center items-center'> <h1 className='text-[25px] font-medium '>{userInfo?.name}</h1><div class="dropdown dropdown-hover">
                        <label tabindex="0" class="inline-flex flex-shrink-0 cursor-pointer flex-wrap items-center justify-center bg-transparent  m-1"><div><MdArrowDropDown className='' size={30} /> </div></label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='ml-[-60px] shadow bg-base-100'><a onClick={signOutHandler} >Sign Out</a></li>
                            <li className='ml-[-60px] shadow bg-base-100'><a onClick={handleUserProfile} >User Profile</a></li>

                        </ul>
                    </div>        </div> </>) || (userInfoRegister && <><div className='flex justify-center items-center'><h1 className='text-[25px] font-medium '>{userInfoRegister?.name}</h1> <div class="dropdown dropdown-hover">
                        <label tabindex="0" class="inline-flex flex-shrink-0 cursor-pointer flex-wrap items-center justify-center bg-transparent  m-1"><div><MdArrowDropDown className='' size={30} /> </div></label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='ml-[-60px] shadow bg-base-100'><a onClick={signOutHandler} >Sign Out</a></li>
                            <li className='ml-[-60px] shadow bg-base-100'><a onClick={handleUserProfile} >User Profile</a></li>

                        </ul>
                    </div>  </div></>) || <Link to='/login'><button onClick={() => setModalOpen(true)} type="button" class="px-6
            py-2.5
            bg-[#D1DEEB]
            
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B]
            transition
            duration-150
            ease-in-out " >
                        Log in
                    </button></Link>}

                </div>

                <div className=' flex justify-between items-center space-x-4 md:hidden'>


                    <div onClick={handleNav2} className='   md:hidden'>
                        <MagnifyingGlassIcon className="h-6 w-6 " />

                    </div>



                    <div onClick={() => setNav2(!nav2)} className='md:hidden'>

                        {
                            !nav2 ? <ShoppingBagIcon className="h-6 w-6 text-blue-500" /> : <XMarkIcon className="h-6 w-6 text-black" />

                        }

                    </div>


                    <div onClick={handleNav} className='   md:hidden'>
                        <Bars2Icon className="h-6 w-6 " />

                    </div>

                </div>


            </div>}

            {/* <div className={nav ? 'fixed left-0 top-[74px] w-full h-screen bg-black/80' : ''}> */}

            {/* <div className={nav ? 'fixed left-0 top-[74px] w-full h-screen bg-black/80' : ''}> */}
            <div className={!nav ? 'hidden' : 'absolute w-full h-screen top-0 bg-[#FFFFFF]  px-4 transition delay-150 duration-700 ease-in-out md:fixed md:left-0 md:top-[74px]  md:w-[25%] md:h-screen md:bg-[#FFFFFF]  md:ease-in-out md:duration-300  '}>
                {/* <div className={nav ? 'fixed left-0 top-[74px] w-[70%] md:w-[25%] h-screen bg-[#FFFFFF]  ease-in-out duration-300' : 'fixed left-[-100%] top-[74px] w-[70%] md:w-[25%] h-screen bg-[#FFFFFF] ease-in duration-500'}> */}
                {/* <div className={nav ? 'fixed left-0 top-[74px] w-[70%] md:w-[25%] h-screen bg-[#FFFFFF]  ease-in-out duration-300' : 'fixed left-[-100%] top-[74px] w-[70%] md:w-[25%] h-screen bg-[#FFFFFF] ease-in duration-500'}> */}


                <div className='mt-[6px] pl-[30px] pr-[10px] '>
                    <div className='flex justify-between items-center text-[#010203]'>
                        <h1 className=' text-[20px] md:text-[24px]'>Categories</h1>
                        <XMarkIcon onClick={handleNav} className="h-4 w-4 md:h-6 md:w-6 cursor-pointer z-10" />



                    </div>

                    {featuredCategories?.map((s) => <><div className='flex flex-col mt-[25px] space-y-1 '>

                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center space-x-3 text-sm'>
                                {/* <FolderMinusIcon className="h-4 w-4" /> */}


                                <p onClick={() => handleSideNavCategory(s)} className='cursor-pointer'>{s}</p>



                            </div>

                        </div>

                    </div></>)}

                </div>



                {/* uporer */}


            </div>
            {/* nicher */}




            <div className={!nav3 ? 'hidden' : 'fixed  w-full h-screen top-0 bg-[#FFFFFF]  px-4 ease-in duration-1000   '}>

                <div className='flex justify-end items-center text-[#010203] mt-[30px]'>

                    <XMarkIcon onClick={handleNav2} className="h-6 w-6  " />



                </div>
                <div className='flex justify-start items-center space-x-2 mt-[30px]'>
                    <MagnifyingGlassIcon className="h-8 w-8 text-black " />
                    <input ref={searchRef} onChange={handleSearchInput}
                        onKeyDown={handleKeyDown} type="text" className='outline-none border-none text-[20px]  text-black' placeholder='Search' />



                </div>
                <button onClick={handleSearch} type="button" className='mt-[10px] w-full px-6
            py-2.5
            bg-[#D1DEEB]
            
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B] '>Search</button>


            </div>





            <div className={!nav2 ? 'hidden' : 'absolute w-full bg-[#FFFFFF]  px-4 md:hidden'}>

                <VscHome className='border-b-2 border-zinc-300 w-full my-[8px]' size={25} />
                <DocumentTextIcon className="h-6 w-full border-b-2 border-zinc-300 my-[8px] " />
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-full border-b-2 border-zinc-300 my-[8px]   " />
                <BellIcon className="h-6 w-full  border-b-2 border-zinc-300  my-[8px]" />
                <ShoppingCartIcon className="h-6 w-full border-b-2 border-zinc-300 my-[8px] " />
                {(userInfo || userInfoRegister) ? <a onClick={signOutHandler} className=" " href="#"> <button className=' w-full px-6 py-2.5
            bg-[#D1DEEB]
            font-semibold
            text-[16px]
            leading-tight           
            rounded
            shadow-md
             text-[#2B333B] hover:bg-gray-200 md:mt-[50px]'>SignOut</button> </a> : <Link to='/login' ><button onClick={() => setModalOpen(true)} type="button" class="px-6
            py-2.5
            bg-[#D1DEEB]
            w-full          
            font-semibold
            text-[16px]
            leading-tight           
            rounded
            shadow-md
             text-[#2B333B]
            transition
            duration-150
            ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Log in
                </button></Link>}
            </div>


            {/* <div className='hidden'>
                <MyContext.Provider value={{ nav2, setNav2 }}>
                   <Login></Login>
                </MyContext.Provider>
            </div> */}

        </div>

        </div>



        
    );
};

export default Nav;
