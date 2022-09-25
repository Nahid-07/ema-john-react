import React from 'react';

const Product = (props) => {
    // console.log(props.product);
    const {product, handle} = props;
    const {img,name,seller,price,ratings,category} =product
    return (
        <div className='border w-[300px] h-[500px] relative rounded-lg mt-28'>
            <div className='p-2 '>
                <img className='rounded-lg' src={img} alt="" />
            </div>
            <div className='rounded-lg p-2'>
                <h1 className='text-lg font-semibold'>{name}</h1>
                <p className='text-lg'> price : ${price}</p>
                <p>{category}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings}</p>
            </div>
            <button onClick={()=> handle(product)} className='rounded-b-lg absolute bottom-0 bg-orange-300 w-full py-2 transition duration-500 hover:bg-orange-600'>Add to cart</button>
        </div>
    );
};

export default Product;