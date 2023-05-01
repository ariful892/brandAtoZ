import { loadForProducts } from "../../actionCreators/productsForYouActions";

const loadProductsForYouData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=1&seller=&name=&category=&min=0&max=0&rating=0&order=newest&flash_sale=&fbclid=IwAR3STCDFoyopM2A_wSkvlBp_Jq1dp-I-lcP50dHI-A8WIFat8uUU7zBtCfc");
        const data = await res.json();

        // console.log(data.products)
        if (data.products.length) {
            dispatch(loadForProducts(data.products));
        }
    }
}

export default loadProductsForYouData;