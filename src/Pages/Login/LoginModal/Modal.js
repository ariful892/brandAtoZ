import {

    Route,
    NavLink,
    Routes,
    Outlet

} from "react-router-dom";
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
// import './Modal.css'



const Modal = ({ setOpenModal }) => {


    let activeClassName = "underline";
    return (

        <div>

            <div className="w-full h-screen fixed  flex justify-center z-10  bg-gray-500/50 ">
                <div className="h-max w-[350px] border-[12px] bg-white flex flex-col p-[25px] mt-[40px] border-white">
                    <div className=" border-none text-[25px]  cursor-pointer flex justify-end">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className="flex justify-start items-center text-[20px] text-[#2B333B] space-x-6 font-medium">
                        <NavLink to="/login"
                            className={({ isActive }) =>
                                isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
                            }>

                            <p>Login</p>
                        </NavLink>

                        <NavLink to="/signup" className={({ isActive }) =>
                            isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
                        }>
                            <p>Signup</p>
                        </NavLink>
                    </div>


                    <Routes>


                        <Route path='/login' element={<Login setOpenModal={setOpenModal}></Login>}></Route>
                        <Route path='/signup' element={<SignUp setOpenModal={setOpenModal}></SignUp>}></Route>



                    </Routes>


                </div>
            </div>

        </div>
    );
};

export default Modal;