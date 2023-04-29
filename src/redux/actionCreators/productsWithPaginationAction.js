import { PRODUCTS_PAGINATION, PRODUCTS_PAGINATION_REQUEST, PRODUCTS_PAGINATION_SUCCESS } from "../actionTypes/actionTypes"


const loadsAllProducts=(num)=>async(dispatch,getState)=>{
    

      dispatch({type:PRODUCTS_PAGINATION_REQUEST})
      
    try {
        const res=await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=2&seller=&name=&category=&min=0&max=0&rating=0&order=newest&flash_sale=&fbclid=IwAR1ZjlVfQ47TbVJYFcWSMX3adhBvcUazy9TRLydJiWYksGh5pxsVOuoXYOM`)

        const data=await res.json()
    
        console.log(data)
    
        if(data){
            dispatch({type:PRODUCTS_PAGINATION_SUCCESS,payload:data})
        }
        
    } catch (error) {
        
    }

        
   
    

}


export const loadAllProductsPagination=(number)=>async(dispatch)=>{
    const res=await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=${number}&seller=&name=&category=&min=0&max=0&rating=0&order=newest&flash_sale=&fbclid=IwAR1ZjlVfQ47TbVJYFcWSMX3adhBvcUazy9TRLydJiWYksGh5pxsVOuoXYOM`)

    const data=await res.json()

    console.log(data)

    if(data){
        dispatch({type:PRODUCTS_PAGINATION_SUCCESS,payload:data})
    }

}

export default loadsAllProducts


