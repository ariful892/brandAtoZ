
import React from 'react';

const QuickLookModal = ({ product, img }) => {
    return (
        <div className="modal">
            <div className="modal-box  h-full bg-white">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div >
                    <div className='flex flex-col items-center'>
                        <img className='w-60' src={img} alt="" />
                        <h3 className="text-lg font-bold mt-2 mb-1">{product.name}</h3>
                        <p className="mb-1">Price: <span className='text-xl font-bold'>BDT{product.price}</span></p>
                    </div>
                    <div className='bg-gray-200 mt-3 p-2'>
                        <p className="text-md mb-1">ID: {product._id}</p>
                        <p className="text-md mb-1">Category: {product.category}</p>
                        <p className="mb-1">Color: {product.color}</p>
                        <p className="mb-1">Size: {product.size}</p>
                        <p className="mb-1">Material: {product.material}</p>
                        <p className="mb-1">Quantity: {product.countInStock}</p>
                        <p className="mb-1">Rating: {product.rating}</p>
                        <p className="mb-1">Reviews: {product.numReviews}</p>
                        <p className="mb-1">Product Id Main: {product.productIdMain}</p>
                        <p className="mb-1">Return: {product.returnDays}</p>
                        <p className="mb-1">Sub Category: {product.sub_category}</p>
                        <p className="mb-1">Sub Category1: {product.sub_category1}</p>
                        <p className="mb-1">Warrenty: {product.warenteeDays}</p>
                        <p className="mb-1">Seller ID: {product.seller._id}</p>
                        <p className="mb-1">Created At: {product.createdAt}</p>
                        {/* <p className="mt-2 description">{product.description}</p> */}
                        <pre className="mt-2 description">{product.description}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickLookModal;