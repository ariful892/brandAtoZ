import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../redux/actionCreators/authActions';



const SignUp = ({ setOpenModal }) => {
    const navigate = useNavigate()


    const { userInfoRegister, loading1 } = useSelector((state) => state?.userRegister);

    useEffect(() => {
        if (userInfoRegister) {
            navigate('/')
            console.log('oops')
        }

    }, [userInfoRegister, navigate])


    const [formData, setFormData] = useState({

        name: '',
        email: '',
        phnNo: '',
        password: '',
        confirmPassword: '',
        isSeller: ""

    })


    const { name, email, phnNo, password, confirmPassword, isSeller } = formData

    const onChange = (e) => {

        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))

    }


    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phnRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)
    const isSellerRef = useRef(null)
    const dispatch = useDispatch()


    const onSubmit = (e) => {
        e.preventDefault()
        setOpenModal(false);




        const userData = { name, email, phnNo, password, isSeller }
        console.log(userData)
        if (password !== confirmPassword) {
            alert('Password and confirm password are not match');
        } else {
            dispatch(register(userData));
        }

        nameRef.current.value = ""
        emailRef.current.value = ""
        phnRef.current.value = ""
        passwordRef.current.value = ""
        confirmPasswordRef.current.value = ""
        isSellerRef.current.value = ""







    }

    if (loading1) {
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
            <h1 className='text-3xl font-semibold my-[12px]'>Create Account</h1>
            <form className='' onSubmit={onSubmit}>
                <div className='flex flex-col  space-y-3 mb-[20px]'>

                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={name} name='name' ref={nameRef} placeholder='Username' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={email} name='email' ref={emailRef} placeholder='email' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={phnNo} name='phnNo' ref={phnRef} placeholder='Phone No/Email' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={password} name='password' ref={passwordRef} placeholder='Password' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={confirmPassword} name='confirmPassword' ref={confirmPasswordRef} placeholder='Confirm Password' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={isSeller} name='isSeller' ref={isSellerRef} placeholder='isSeller' onChange={onChange} />
                    <button type='submit' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] w-7/12 '>Sign up</button>




                </div>
            </form>

            <h1 onClick={handleMarchentReg} className='text-blue-700 font-bold text-xl cursor-pointer'>Register as a Merchant</h1>


        </div>
    );
};

export default SignUp;