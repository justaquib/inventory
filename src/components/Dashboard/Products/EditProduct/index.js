import Drawer from '@/components/Generic/Drawer';
import Title from '@/components/Generic/Title';
import React, { useState, useEffect } from 'react';

const EditProduct = ({ id, data, product }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (product) {
            setSearchTerm(product.name);
        }
    }, [product]);

    return (
        <Drawer position='right' id={id}
            title={<Title text='Edit Product' />}
            className='p-4'
        >
            <div className='mb-4'>
                <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-900'>Product Title</label>
                <input type='text' id='title'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Lenovo ThinkPad X1'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='category' className='block mb-2 text-sm font-medium text-gray-900'>Category</label>
                <input type='text' id='category'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Laptop'
                    value={product.category}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='brand' className='block mb-2 text-sm font-medium text-gray-900'>Brand Name</label>
                <input type='text' id='brand'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Lenovo'
                    value={product.brand}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900'>Price</label>
                <input type='number' id='price'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Price'
                    value={product.price}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900'>Product Description</label>
                <textarea
                    id='description'
                    className='bg-secondary-50 border border-secondary-300 resize-y text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Budget-friendly laptop with a 15.6-inch Full HD display and decent performance.'
                    value={product.description}
                    required=''
                    autoComplete='off'
                    rows='8'
                />
            </div>
            <div>
                <button type='submit' className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800'>
                    Edit Product
                </button>
            </div>
        </Drawer>
    );
};

export default EditProduct;
