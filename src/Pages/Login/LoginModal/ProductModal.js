import React from 'react';

const ProductModal = ({po,setOpenModal,product,setPo}) => {
    const deleteModal=(prodId)=>{

        const t=po.filter((p)=>p._id!==prodId)
        setPo(t)

    }
    return (
        <div>
            <div className="w-full h-screen  flex justify-center z-10 absolute left-4  mt-[25px] ">

                <div className='flex justify-end  relative '>
                <label onClick={()=>deleteModal(product._id)} class="btn btn-sm btn-circle absolute  top-2 left-32  md:left-60">✕</label>

                </div>

                <div  className="  h-[350px] w-[380px]  bg-white flex flex-col p-[25px]  ">
                 <div className=' overflow-y-auto w-[350px]'>
                 <h1>jejejo</h1>
                    <h1>jejejo</h1>
                    <button  className="btn btn-outline btn-sm btn-warning w-full">Quick Look</button>
                    <h1>jejejo</h1>
                    <h1>jejejo</h1>
                    <h1>jejejo</h1>
                    <h1>jejejo</h1>
                    <h1>jejejo</h1>
                    <h1>{po[0]?._id}</h1>
                    <h1>{po[0]?._id}</h1>
                    <h1>{po[0]?._id}</h1>
                    <h1>{po[0]?._id}</h1>
                    <h1>{po[0]?._id}</h1>
                    <h1>{po[0]?._id}</h1>
                    <h1>{po[0]?._id}</h1>
                    <h1>{po[0]?._id}</h1>
                    <h1>{po[0]?._id}</h1>
                    <h1>{po[0]?._id}</h1>
                 </div>

                </div>

            </div>
            
        </div>
    );
};

export default ProductModal;