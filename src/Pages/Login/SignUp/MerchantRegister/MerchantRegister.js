import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../../redux/actionCreators/authActions';


const MerchantRegister = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const { userInfoRegister, loading1 } = useSelector((state) => state?.userRegister);
    useEffect(() => {
        if (userInfoRegister) {
            navigate('/sellerSelectShopType')
            
        }

    }, [userInfoRegister, navigate])
    const [formData,setFormData]=useState({
        name:'',
        password:'',
        confirmPassword:'',
        phnNo:'',
        email:'',
        isSeller:true

    })

   const {name,password,confirmPassword,phnNo,email,isSeller}= formData


   const onChange=(e)=>{

    setFormData((prevData)=>({
        ...prevData,
        [e.target.name]:e.target.value

    }))

   }


   


    const handleMerchantForm=(e)=>{
        e.preventDefault()
        const userData={name,password,confirmPassword,phnNo,email,isSeller}
        // navigate('/sellerSelectShopType')
        if (password !== confirmPassword) {
            alert('Password and confirm password are not match');
        } else {
            dispatch(register(userData));
        }


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


    return (
        <div className='mt-[100px] px-[100px]'>
            <div className='font-extrabold md:text-3xl text-xl'>
                <h1 className='text-black' >Setup Your</h1>
                <h1 className='text-black' >Marchant <span className='ml-[10px]'> Account</span></h1>
            </div>

            <form onSubmit={handleMerchantForm}>

                <div className='flex flex-col  space-y-4 my-[30px]'>

                    <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='name' placeholder='Username' required value={name} onChange={onChange} />
                    
                   
                    <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='password' placeholder='Password' required value={password} onChange={onChange}/>
                    <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='confirmPassword' placeholder='Confirm Password' required value={confirmPassword} onChange={onChange} />
                    <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='phnNo' placeholder='Phone No/Email'required value={phnNo} onChange={onChange} />
                    <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='email' placeholder='email'required value={email} onChange={onChange} />
                    {/* <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='isSeller' placeholder='isSeller' /> */}
                    <button type='submit' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] md:w-1/4 w-full'>Setup Your Shop</button>




                </div>




            </form>

        </div>
    );
};

export default MerchantRegister;