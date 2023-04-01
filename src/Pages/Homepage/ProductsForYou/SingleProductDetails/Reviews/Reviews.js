import React, { useRef, useState } from 'react';
import './Reviews.css'
import user1 from '../../../../../assets/single-product/user1.png'
import user2 from '../../../../../assets/single-product/user2.png';
import comment1 from '../../../../../assets/single-product/comment1.png';
import comment2 from '../../../../../assets/single-product/comment2.png';
import review1img1 from '../../../../../assets/single-product/user1img1.png';
import review1img2 from '../../../../../assets/single-product/user1img2.png';
import review1img3 from '../../../../../assets/single-product/user1img3.png';
import review2img1 from '../../../../../assets/single-product/user2img1.png';
import review2img2 from '../../../../../assets/single-product/user2img2.png';
import { useDispatch } from 'react-redux';
import { postReview } from '../../../../../redux/actionCreators/reviewAction';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Reviews = () => {
    // const [revieew,setRevieew]=useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/api/prodReview')
    //     .then((res)=>res.json())
    //     .then(data=>setRevieew(data))

      

    // },[])

    const { isLoading, error, data,refetch } = useQuery('repoData', () =>
    fetch('https://backedforreview-production-6464.up.railway.app/api/prodReview').then(res =>
      res.json()
    )
  )





  const usernameRef = useRef(null)
  const reviewRef = useRef(null)
  const imgRef = useRef(null)
    const dispatch=useDispatch()
    const [file,setFile]=useState('')
    const [formDat, setFormData] = useState({

        username: '',
        review: '',
       


    })
     const { username, review } = formDat
    const onChange = (e) => {

        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))



    }


    const imageUload=(e)=>{
        setFile(e.target.files[0])
       


    }



    const handleImageUpload = (event) => {
        event.preventDefault();
        // const file = event.currentTarget["fileInput"].files[0];
    
        const formData = new FormData();
        formData.append("username",formDat.username);
        formData.append("review",formDat.review);
        formData.append('testImg', file);
        formData.append('testImg', file.name);
    
        // fetch("http://localhost:5000/api/prodReview/", {
        //   method: "POST",
        //   body: formData
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });

       
        dispatch(postReview(formData))
        toast.success('Your review is posted successfully')
        usernameRef.current.value = " "
        reviewRef.current.value = " "
        imgRef.current.value =""

       
        
            refetch()

            // event.target.reset()
           
           
      

       

   

    


      };



      if (isLoading) {
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
        <div className='reviews-container'>
            <h2 className='reviews-title'>Reviews</h2>

            <form className='mt-[-20px] mb-[35px]' onSubmit={handleImageUpload}>
                <input className='border-2 my-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={username} name='username'  placeholder='username'  ref={usernameRef} onChange={onChange} />
                <textarea className='border-2 mb-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={review} name='review'  placeholder='review' ref={reviewRef} onChange={onChange} />
                    <input  type="file" name='testImg' ref={imgRef} onChange={imageUload}/><br></br>
                    <button type='submit' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] w-full mt-2 '>Submit</button>
                </form>


                {data.map((r)=><><div className='my-[100px]'>
                    <div className='flex justify-start items-center space-x-3'>
                    <img className='h-[60px] w-[60px] rounded-full  border border-blue-400 flex justify-center items-center' src={`https://backedforreview-production-6464.up.railway.app/${r.image}`} alt="" />
                    <h1 className='font-semibold'>{r.username}</h1>

                    </div>
                    <h1 className='ml-[15px] mt-[10px]'>{r.review}</h1>
                   
                   
                    

                    

                    </div></>)}

            <div className='user-review'>
                <div className='user-container'>
                    <img className='user-image' src={user1} alt="" />
                    <div className="review-user-name">Elementum Rasli</div>
                </div>
                <div className="reviews-img">
                    <img src={review1img1} alt="" />
                    <img src={review1img2} alt="" />
                    <img src={review1img3} alt="" />
                </div>
                <p className='review'>Mattis pellentesque orci vitae neque, enim amet in. In arcu semper enim cras enim quisque fringilla at est. Laoreet faucibus arcu, dui fermentum. Accumsan, facilisis blandit quis a consectetur amet id. Etiam dictum nisi, a morbi donec pellentesque tellus euismod. Ut id amet, consectetur.</p>
                <div className="comment-container">
                    <div className="commenter">
                        <div className='commenter-user'>
                            <img className='commenter-img' src={comment1} alt="" />
                            <h2 className='commenter-name'>Vel Vestibulum</h2>
                        </div>
                        <p className='comment'>Nullam amet, nibh dignissim duis id placerat dui viverra. Nulla id scelerisque quis est mauris, ut habitant id facilisis. Viverra egestas porta sed velit, dolor. Semollis tristique.</p>
                    </div>
                    <div className="commenter">
                        <div className='commenter-user'>
                            <img className='commenter-img' src={comment2} alt="" />
                            <h2 className='commenter-name'>Faucibus Nskeo</h2>
                        </div>
                        <p className='comment-text'>Egestas sit et lectus in est diam aliquet. Habitasse tempus rhoncus quis at eleifend sed. Nascetur orci, aliquet duis at facectus convallis. </p>
                    </div>
                    <textarea className='comment-box' name="" id="" placeholder='Reply'></textarea>
                </div>
            </div>
            <div className='user-review'>
                <div className='user-container'>
                    <img className='user-image' src={user2} alt="" />
                    <div className="review-user-name">Risus Dui Nunc Arcu</div>
                </div>
                <div className="reviews-img">
                    <img src={review2img1} alt="" />
                    <img src={review2img2} alt="" />
                </div>
                <p className='review'>Aliquet volutpat pellentesque pellentesque at. Tincidunt dolor tortor, diam tempor. Tristique id felis, sed leo. Et, viverra cursus at faucibus mi lectus ut sed elit. Nisi, pellentesque pharetra, aliquam, iaculis convallis malesuada.</p>
                <div className="comment-container">
                    <div className="commenter">
                        <div className='commenter-user'>
                            <img className='commenter-img' src={comment1} alt="" />
                            <h2 className='commenter-name'>Vel Vestibulum</h2>
                        </div>
                        <p className='comment'>Nullam amet, nibh dignissim duis id placerat dui viverra. Nulla id scelerisque quis est mauris, ut habitant id facilisis. Viverra egestas porta sed velit, dolor. Semollis tristique. </p>
                    </div>
                    <div className="commenter">
                        <div className='commenter-user'>
                            <img className='commenter-img' src={comment2} alt="" />
                            <h2 className='commenter-name'>Cum Orci Facilisi </h2>
                        </div>
                        <p className='comment'>Diam, euismod sapien id commodo sit. Placerat cras id diam scelerisque ipsum vitae. At moassa. Nisi suscipit sed placerat felis massa, ut. </p>
                    </div>

                    <textarea className='comment-box' name="" id="" placeholder='Reply'></textarea>
                </div>
            </div>
        </div>
    );
};

export default Reviews;