import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../../redux/actionCreators/authActions';
import { useContext } from 'react';
import Mycontext from '../../../../src/Mycontext'


const Login = ({ setOpenModal }) => {
    //  const { nav2, setNav2 } = useContext(Mycontext);
    // console.log(nav2)
    const navigate = useNavigate()

    const { userInfo, loading2 } = useSelector((state) => state?.userSignin);

    useEffect(() => {
        if (userInfo) {
            navigate('/')

        }
    }, [userInfo, navigate])




    const [formData, setFormData] = useState({

        phnNo: '',
        password: '',


    })
    const { phnNo, password } = formData
    const onChange = (e) => {

        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))



    }

    const phnRef = useRef(null)
    const passwordRef = useRef(null)
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()

        setOpenModal(false);



        const userData = { phnNo, password }
        console.log(userData)

        dispatch(signin(userData));



        phnRef.current.value = ""
        passwordRef.current.value = ""


    }
    // console.log(toggle)


    if (loading2) {
        return <div className="flex items-center justify-center">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
            </div>
        </div>
    }

    const handleMarchentReg=()=>{
          setOpenModal(false);
          
         navigate('/merchantRegister')
       

    }

    return (
        <div>
            <h1 className='text-3xl font-semibold my-[24px]'>Welcome Back</h1>
            <form onSubmit={onSubmit}>
                <div className='flex flex-col  space-y-6 mb-[35px]'>
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={phnNo} name='phnNo' ref={phnRef} placeholder='Phone No' onChange={onChange} />

                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="password" value={password} name='password' ref={passwordRef} placeholder='Password' onChange={onChange} />

                    <button type='submit' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] w-7/12 '>Sign In</button>




                </div>
            </form>

            <h1 onClick={handleMarchentReg} className='text-blue-700 font-bold text-xl cursor-pointer'>Register as a Merchant</h1>

        </div>
    );
};

export default Login;