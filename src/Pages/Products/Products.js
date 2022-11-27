import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Android from './Product';

const Products = () => {
    const allProducts = useLoaderData();
    return (
      <div className='container mx-auto'>
        <h1 className='text-3xl text-blue-600 my-10 font-bold text-center'>Find your next phones here!!</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-20 my-20">
          {allProducts.products?.map((product) => (
            <Android key={product.id} product={product}></Android>
          ))}
        </div>
      </div>
    );
};

export default Products;