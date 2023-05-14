import React, { useEffect, useState } from 'react';
import './ProductInfo.css'
import productImg from '../../../../../assets/single-product/productimg.png';
import product1 from '../../../../../assets/single-product/product1.png';
import product2 from '../../../../../assets/single-product/product2.png';
import product3 from '../../../../../assets/single-product/product3.png';
import product4 from '../../../../../assets/single-product/product4.png';
import product5 from '../../../../../assets/single-product/product5.png';
import star from '../../../../../assets/single-product/icons/Star.png';
import starlight from '../../../../../assets/single-product/icons/starlight.png';
import heart from '../../../../../assets/single-product/icons/heart.png';
import ProductDetails from './ProductDetails/ProductDetails';
import DeliveryOption from './DeliveryOption/DeliveryOption';
// import Zoom from 'react-img-zoom'
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import { loadingAction } from '../../../../../redux/actionCreators/shoppingmallActions';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";


import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useDispatch, useSelector } from 'react-redux';
import loadSingleProductData from '../../../../../redux/thunk/products/fetchSingleProduct';
import { productDisplayImage } from '../../../../../redux/actionCreators/productsForYouActions';
import { toast } from 'react-toastify';
import { loadCartProducts } from '../../../../../redux/actionCreators/cartAction';
import { addToDb, getStoredCart } from '../../../../../utilites/cartStorage';
import { useForm } from 'react-hook-form';
import QuickLookModal from './QuickModal/QuickLookModal';

const ProductInfo = () => {


    const { id } = useParams();
    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const product = useSelector((state) => state.forYouProducts.singleProduct);
    const loading = useSelector((state) => state.forYouProducts.loading);
    const img = useSelector((state) => state.forYouProducts.displayImage);
    const { userInfo, loading2 } = useSelector((state) => state?.userSignin);

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState(0);
    // const [cartProduct, setCartProduct] = useState([]);

    // console.log(loading)
    console.log(product)
    // console.log(size)
    // console.log(quantity)

    useEffect(() => {
        dispatch(loadingAction());
        dispatch(loadSingleProductData(id));
    }, [])

    const { isLoading, error, data: productDetails, refetch } = useQuery('details', () =>
        fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products/${id}`)
            .then(res => res.json())
    )



    if (loading || isLoading) {
        return <Loading></Loading>
    }

    // if (product) {
    //     setIsLoading(false);
    // }

    // console.log(productDetails)

    // if (product && displayImage === '') {
    //     const productImg = product?.image.split(',');
    //     // console.log(productImg);
    //     setDisplayImage(`https://brandatoz.com${productImg[0]}`)
    // }

    let productImagesList, productImages;
    if (product) {
        productImagesList = product.image.split(',');
    }


    if (productImagesList.length < 5) {
        productImages = productImagesList.reverse().slice(1);
    }

    else {
        productImages = productImagesList.reverse().slice(productImagesList.length - 5);
    }

    const handleDisplayImage = img => {
        const imageUrl = `https://brandatoz.com${img}`;
        // console.log(imageUrl)
        dispatch(loadingAction());
        dispatch(productDisplayImage(imageUrl))
    }


    // let userName;
    // if(userInfo){
    //     userName
    // }
    let newCart;
    let errorMessage;
    // const handleAddtoCart = () => {

    //     if (color === "" || size === "" || quantity === 0) {
    //         console.log('please')
    //         errorMessage = <label className=' '>Please reduce the quantity. The number of products isn't available at the moment</label>
    //     }
    //     else {
    //         const userName = userInfo ? userInfo.name : 'guest';

    //         const cart = {
    //             productID: id,
    //             name: product.name,
    //             img: img,
    //             color: color,
    //             size: size,
    //             quantity: parseInt(quantity),
    //             material: product?.material,
    //             price: product.price,
    //             username: userName,
    //         }

    //         // console.log(cart);

    //         const cartProduct = getStoredCart();
    //         // console.log(cartProduct)


    //         if (cartProduct.length) {
    //             const addedCart = cartProduct.filter(c => c.productID === id);
    //             console.log(addedCart);
    //             if (addedCart.length) {
    //                 toast.error('Already added')
    //             }
    //             else {
    //                 newCart = [...cartProduct, cart];
    //                 addToDb(newCart);
    //                 // setCartProduct(newCart);


    //                 // send cart to database
    //                 fetch('http://localhost:5000/cart', {
    //                     method: 'POST',
    //                     headers: {
    //                         'content-type': 'application/json',
    //                         // authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //                     },
    //                     body: JSON.stringify(cart)
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         if (data.insertedId) {
    //                             // toast.success('Product is added');
    //                             // reset();
    //                         }
    //                         else (
    //                             toast.error('Failed to add')
    //                         )
    //                     })

    //             }

    //         }
    //         else {
    //             newCart = [cart];
    //             // console.log(newCart)
    //             addToDb(newCart);


    //             // send cart to database
    //             fetch('http://localhost:5000/cart', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json',
    //                     // authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //                 },
    //                 body: JSON.stringify(cart)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.insertedId) {
    //                         // toast.success('Product is added');
    //                         // reset();
    //                     }
    //                     else (
    //                         toast.error('Failed to add')
    //                     )
    //                 })


    //         }
    //     }

    // }

    const onSubmit = async data => {

        // const userName = userInfo ? userInfo.name : 'guest';
        let mainPrice;

        if (product?.discounted_price) {
            mainPrice = product.discounted_price;
        }
        else {
            mainPrice = product.price;
        }
        console.log(mainPrice)

        const cart = {
            product: id,
            name: product.name,
            image: img,
            countInStock: product.countInStock,
            seller: product.seller,
            clr: data.color,
            sz: data.size,
            qty: parseInt(data.quantity),
            // material: product?.material,
            price: mainPrice,
            tenPercentage: false,
            // username: userName,
        }

        // console.log(cart);

        const cartProduct = getStoredCart();
        // console.log(cartProduct)


        if (cartProduct.length) {
            const addedCart = cartProduct.filter(c => c.productID === id);
            // console.log(addedCart);
            if (addedCart.length) {
                toast.error('Already added')
            }
            else {
                newCart = [...cartProduct, cart];
                console.log(newCart.length)
                loadCartProducts(newCart);
                addToDb(newCart);
                // setCartProduct(newCart);


                // send cart to database
                fetch('http://localhost:5000/cart', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(cart)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            // toast.success('Product is added');
                            // reset();
                        }
                        else (
                            toast.error('Failed to add')
                        )
                    })

            }

        }
        else {
            newCart = [cart];
            // console.log(newCart)
            loadCartProducts(newCart)
            addToDb(newCart);


            // send cart to database
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(cart)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // toast.success('Product is added');
                        // reset();
                    }
                    else (
                        toast.error('Failed to add')
                    )
                })


        }

    }

    const handleBuyNow = () => {
        navigate(`/checkout/${id}`)
    }


    return (
        <div className='product-info-container'>

            <div>
                <div className='product-img-info'>
                    <div className='product-img-container'>


                        <div className='product-display-img'>

                            {/* <ZoomableImage className='product-img-size' src={img} alt='some alt text' zoomScale={3} transitionDuration={0.5} /> */}

                            {/* <CursorZoom
                                image={{
                                    src: img,
                                    width: 400,
                                    height: 480
                                }}
                                zoomImage={{
                                    src: img,
                                    width: 800,
                                    height: 1200
                                }}
                                cursorOffset={{ x: 80, y: -80 }}
                            /> */}

                            {/* <Zoom
                                className='product-img-size'
                                img={img}
                                zoomScale={3}
                                width={480}
                                height={423}
                            /> */}

                            {/* <img className='product-img-size' src={displayImage} alt="" /> */}


                            <TransformWrapper
                                defaultScale={1}
                                defaultPositionX={100}
                                defaultPositionY={200}
                                onWheel={true}
                            >
                                <TransformComponent>
                                    <img className='product-img-size' src={img} alt="" />
                                </TransformComponent>
                            </TransformWrapper>

                        </div>


                        {/* <div className='' style={{ width: '342px', height: '513px' }}> */}

                        {/* <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: img,
                                },
                                largeImage: {
                                    src: img,
                                    width: 1200,
                                    height: 1800
                                }
                            }} /> */}
                        {/* </div> */}



                        <div className='product-demo-img-container'>
                            {
                                productImages.reverse().map((img, index) =>
                                    <img
                                        key={index + 1}
                                        onClick={() => handleDisplayImage(img)} src={`https://brandatoz.com${img}`} alt="" />
                                    // <ImageContainer
                                    //     img={img}
                                    //     setDisplayImage={setDisplayImage}
                                    // ></ImageContainer>
                                )
                            }
                        </div>
                    </div>
                    <div className='product-info'>

                        <h2 className="products-title">{product.name}</h2>

                        <div className='flex justify-between items-center'>
                            <p className="product-type-name">{product.category}</p>

                            <div className='heart-icon-container'>
                                <img className='heart-icon' src={heart} alt="" />
                            </div>
                        </div>

                        <div className="product-rating">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={starlight} alt="" />
                        </div>

                        <div className='mt-10'>

                            <form onSubmit={handleSubmit(onSubmit)} >

                                <div className="form-control">
                                    {product?.color && <div>
                                        <label className="">
                                            <span className="label-text">Color:</span>
                                        </label>
                                        <select onChange={(e) => setColor(e.target.value)} className='ml-10 p-2 rounded-md w-40 bg-white' name="color" id="color"
                                            {...register("color", {
                                                required: {
                                                    value: true,
                                                    message: 'Color is Required'
                                                }
                                            })}
                                        >
                                            <option value={""} >Choose Color
                                            </option>

                                            {product?.color.split(',').map((c, index) =>
                                                <option
                                                    key={index + 1}
                                                    value={c}
                                                >{c}</option>
                                            )}
                                        </select>

                                        <label className="ml-2">
                                            {errors.color?.type === 'required' && <span className="label-text-alt text-red-500">{errors.color.message}</span>}
                                        </label>
                                    </div>
                                    }
                                </div>

                                <div className="form-control mt-2">
                                    {product?.size && <div>
                                        <label className="">
                                            <span className="label-text">Size:</span>
                                        </label>
                                        <select onChange={(e) => setSize(e.target.value)} className='ml-12 p-2 rounded-md w-40 bg-white' name="size" id="size"
                                            {...register("size", {
                                                required: {
                                                    value: true,
                                                    message: 'Size is Required'
                                                }
                                            })}
                                        >
                                            <option value={""} >Choose Size
                                            </option>

                                            {product?.size.split(',').map((s, index) =>
                                                <option
                                                    key={index + 1}
                                                    value={s}

                                                >{s}</option>
                                            )}

                                        </select>

                                        <label className="ml-2">
                                            {errors.size?.type === 'required' && <span className="label-text-alt text-red-500">{errors.size.message}</span>}
                                        </label>
                                    </div>
                                    }
                                </div>


                                <div className="form-control mt-2">
                                    {product?.countInStock && <div>
                                        <label className="">
                                            <span className="label-text">Quantity:</span>
                                        </label>
                                        <select onChange={(e) => setQuantity(e.target.value)} className='ml-5 p-2 rounded-md w-40 bg-white' name="quantity" id="quantity"
                                            {...register("quantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Quantity is Required'
                                                }
                                            })}
                                        >
                                            <option value="">Choose Quantity
                                            </option>
                                            {(() => {
                                                let option = [];
                                                for (let i = 1; i <= product?.countInStock; i++) {
                                                    option.push(<option
                                                        value={i}

                                                    >{i}</option>)
                                                }
                                                return option;
                                            })()}

                                        </select>

                                        <label className="ml-2">
                                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                        </label>
                                    </div>
                                    }
                                </div>

                                <div className='w-60 mx-auto mt-8'>
                                    <label htmlFor="my-modal-3" className='px-3 py-2 border-4 border-black-600 bg-white hover:bg-gray-100 rounded-md '>Quick Look</label>
                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />

                                    <QuickLookModal
                                        product={product}
                                        img={img}
                                    ></QuickLookModal>

                                </div>

                                <div className="price-btn-container">
                                    <p className="quantity ">Available Quantity: <span>{product.countInStock}</span></p>
                                    <h2 className="price">BDT <span>{product.price}</span></h2>

                                    <div className='button-container'>
                                        <button onClick={handleBuyNow} className='btn-red'>Buy Now</button>

                                        <input
                                            className='btn-gray' type="submit" value='Add to Cart' />

                                    </div>
                                </div>

                            </form>



                            {/* <div>
                                {product?.color && <div>
                                    <span className='text-lg mr-1'>Color:</span>
                                    <select onChange={(e) => setColor(e.target.value)} className='ml-10 p-2 rounded-md w-40' name="color" id="color">
                                        <option value={""} >Choose Color
                                        </option>
                                        {product?.color.split(',').map((c, index) =>
                                            <option
                                                key={index + 1}
                                                value={c}
                                            >{c}</option>
                                        )}
                                    </select>
                                </div>
                                }
                            </div>
                          
                            <div className='mt-2'>
                                {product?.size && <div>
                                    <span className='text-lg mr-1'>Size:</span>
                                    <select onChange={(e) => setSize(e.target.value)} className='ml-12 p-2 rounded-md w-40' name="size" id="size">
                                        <option value={""} >Choose Size
                                        </option>
                                        {product?.size.split(',').map((s, index) =>
                                            <option
                                                key={index + 1}
                                                value={s}
                                            >{s}</option>
                                        )}
                                    </select>
                                </div>
                                }
                            </div>
                            <div className='mt-2'>
                                {product?.countInStock && <div>
                                    <span className='text-lg'>Quantity:</span>
                                    <select onChange={(e) => setQuantity(e.target.value)} className='ml-5 p-2 rounded-md w-40' name="quantity" id="quantity">
                                        <option value={0}>Choose Quantity
                                        </option>
                                        {(() => {
                                            let option = [];
                                            for (let i = 1; i <= product?.countInStock; i++) {
                                                option.push(<option
                                                    value={i}
                                                >{i}</option>)
                                            }
                                            return option;
                                        })()}
                                    </select>
                                </div>
                                }
                            </div> */}
                        </div>

                        {/* <div className="price-btn-container">
                            <p className="quantity">Available Quantity: <span>{product.countInStock}</span></p>
                            <h2 className="price">BDT <span>{product.price}</span></h2>
                            <div className='button-container'>
                                <button className='btn-red'>Buy Now</button>
                                <button
                                    className='btn-gray'
                                    onClick={handleAddtoCart}
                                >Add to Cart</button>
                            </div>
                        </div> */}
                        {/* <div className='heart-icon-container'>
                            <img className='heart-icon' src={heart} alt="" />
                        </div> */}
                    </div>
                </div>
                <ProductDetails product={product}></ProductDetails>
            </div>
            <DeliveryOption></DeliveryOption>

        </div>
    );
};

export default ProductInfo;