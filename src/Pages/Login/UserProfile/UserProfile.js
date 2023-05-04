
import React, { useEffect, useState } from 'react';
import  { loadDetails } from '../../../redux/actionCreators/userProfileAction';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Shared/Loading/Loading';
import { USER_UPDATE_PROFILE_RESET } from '../../../redux/actionTypes/actionTypes';


const UserProfile = () => {
    const dispatch=useDispatch()
    const { userInfo, loading2 } = useSelector((state) => state?.userSignin);
    const userDetails = useSelector((state) => state?.userDetails);
    const { details, loading1 }=userDetails
    // const name=details?.name
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phnNo, setPhnNo] = useState('')
    


    useEffect(()=>{

        // dispatch(loadDetails(userInfo?._id))
       
            // dispatch({ type: USER_UPDATE_PROFILE_RESET });

            if(!details){

                // dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(loadDetails(userInfo?._id))
            }

           

            

            

        

      
       
if(details){
    setName(details?.name)
        setEmail(details?.email)
        setPhnNo(details?.phnNo)


}
       
        
    
       
       
    },[dispatch,userInfo?._id,details])

    
   


    if(loading1  ){
        return <Loading></Loading>
    }

    // const handleChange = e => {
        

    //         setState((prevData) => ({
    //             ...prevData,
    //             [e.target.name]: e.target.value,
    //         }))
    
       
      

    // }
    


    return (
        <div className='mt-[100px] px-[100px]'>
            <div className='font-extrabold md:text-3xl text-xl'>

                <h1  className='text-black font-extrabold' >User <span className='ml-[10px]'>Profile</span></h1>
            </div>

            <form >

                <div className='flex flex-col  space-y-4 my-[30px]'>
                    <label class="">
                        <span className="text-[20px] text-black font-bold ">Name </span>
                    </label>
                    <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px] font-bold  text-[#5C738A]' type="text" name='name' placeholder='Username' value={name}  onChange={(e)=>setName(e.target.value)} />

                     
                    <label class="">
                        <span className="text-[20px] text-black font-bold ">Email </span>
                    </label>

                    
                    <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A] font-bold' type="text" name='email' placeholder='email/Optional' value={email}    onChange={(e)=>setEmail(e.target.value)} />

                    <label class="">
                        <span className="text-[20px] text-black font-bold ">Phn No </span>
                    </label>
                    <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A] font-bold' type="text" name='phnNo' placeholder='Phn No' value={phnNo}   onChange={(e)=>setPhnNo(e.target.value)}   />
                    {/* <input className='border-2 border-[#5C738A] md:w-2/4 w-full  rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='isSeller' placeholder='isSeller' /> */}
                    <button type='submit' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] md:w-1/4 w-full'>Update</button>




                </div>




            </form>

        </div>
    );
};

export default UserProfile;