import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';

const Main = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([]);
    // console.log(products)
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    function addToCart(product){
        const newProduct = [...cart,product];
        setCart(newProduct)
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className="col-span-10 grid grid-cols-1 lg:grid-cols-4 gap-3 justify-items-center">
                {
                    products.map(product => <Product key={product.id} product={product} handle={addToCart}></Product>)
                }
            </div>
            <div className="col-span-2 bg-orange-400 h-screen">
                <h1 className='text-2xl text-center mt-6'>Item selected : {cart.length}</h1>
            </div>
        </div>
    );
};

export default Main;