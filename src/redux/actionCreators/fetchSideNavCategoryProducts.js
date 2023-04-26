import { SIDENAVCATEGORYPRODUCTS } from "../actionTypes/actionTypes"


const loadsideNavCategoryProductData=(CategoryProducts)=>async(dispatch, getState)=>{
   
    const res=await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=1&seller=&name=tat&category=${CategoryProducts}&min=0&max=0&rating=0&order=newest&flash_sale=&fbclid=IwAR11viy82tpbxh5_y_AFA15Pw5v6cz_gCQco4-p8UmhVEeJSR6E9PNTHNM4`)
   
    const data=await res.json()
    console.log(data)


    if(data){
        dispatch({type:SIDENAVCATEGORYPRODUCTS,payload:data})
    }





}

export default loadsideNavCategoryProductData;

