import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total += product.price
        shipping += product.shipping
    }
    let tax = +((total * .1).toFixed(2));
    let grandTotal = total + shipping + tax;
    return (
        <div className='sticky top-0 pt-28 px-8'>
            <h1 className='text-2xl'>Item selected : {cart.length}</h1>
            <p className='text-xl my-4'>Price :{total} </p>
            <p className='text-xl'>Shipping : {shipping}</p>
            <p className='text-xl my-4'>Tax : {tax}</p>
            <hr />
            <h2 className='text-2xl font-bold'>Grand total : {grandTotal}</h2>
        </div>
    );
};

export default Cart;