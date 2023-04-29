import {  SIDENAVCATEGORYPRODUCTS_FAIL, SIDENAVCATEGORYPRODUCTS_REQUEST, SIDENAVCATEGORYPRODUCTS_SUCCESS } from "../actionTypes/actionTypes"


const loadsideNavCategoryProductData=(CategoryProducts,loading,setLoading)=>async(dispatch)=>{
    //   dispatch({type: SIDENAVCATEGORYPRODUCTS_REQUEST,payload:CategoryProducts})
    setLoading(!loading)
   

    try {
        

        const res=await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=1&seller=&name=&category=${CategoryProducts}&min=0&max=0&rating=0&order=newest&flash_sale=`)
   
        const data=await res.json()
        console.log(data)
    
    
        if(data){
            setLoading(loading)
           dispatch({type:SIDENAVCATEGORYPRODUCTS_SUCCESS,payload:data})
          
        }
        
    } catch (error) {
        dispatch({
            type: SIDENAVCATEGORYPRODUCTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        
    }
   
   





}


 export const loadsideNavCategoryPaginatedProductData=(CategoryProducts,number)=>async(dispatch,getState)=>{
    const res=await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=${number}&seller=&name=&category=${CategoryProducts}&min=0&max=0&rating=0&order=newest&flash_sale=`)
   
        const data=await res.json()
        console.log(data)
    
    
        if(data){
           
           dispatch({type:SIDENAVCATEGORYPRODUCTS_SUCCESS,payload:data})
          
        }

}

export default loadsideNavCategoryProductData;


