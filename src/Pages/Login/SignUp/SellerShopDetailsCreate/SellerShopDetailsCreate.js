import React from 'react';

const SellerShopDetailsCreate = () => {
    return (
        <div className='mt-[100px] px-[100px]'>
            <div className='font-extrabold text-3xl '>
                <h1 className='text-black' >Setup Your</h1>
                <h1 className='text-black' >Marchant <span className='ml-[10px]'> Account</span></h1>
            </div>

            <form >

                <div className='flex flex-col  space-y-4 my-[30px]'>
                    <h1 className='text-black font-bold'>Shop Owner and Other details</h1>
                    <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='name' placeholder='Username' />
                    <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='email' placeholder='email' />
                    <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='phnNo' placeholder='Phone No/Email' />
                    <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='password' placeholder='Password' />
                    <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='confirmPassword' placeholder='Confirm Password' />
                    <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='isSeller' placeholder='isSeller' />
                    <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='isSeller' placeholder='isSeller' />
                    <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='isSeller' placeholder='isSeller' />
                    <div className='pt-[35px] flex flex-col  space-y-4'>
                        <h1 className='text-black font-bold'>Shop details</h1>
                        <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='isSeller' placeholder='isSeller' />
                        <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='isSeller' placeholder='isSeller' />

                        <div className='flex w-2/4 space-x-2 '>
                            <select class=" border-2 border-[#5C738A] rounded-[8px]  text-[#5C738A] px-[16px] py-[8px] w-full max-w-xs">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]  w-1/4' type="text" name='isSeller' placeholder='isSeller' />
                            <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A] w-1/4' type="text" name='isSeller' placeholder='isSeller' />

                        </div>
                        <input className='border-2 border-[#5C738A] w-2/4 rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" name='isSeller' placeholder='isSeller' />


                    </div>
                    <button type='submit' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] w-1/6 '>Create</button>




                </div>




            </form>

        </div>
    );
};

export default SellerShopDetailsCreate;