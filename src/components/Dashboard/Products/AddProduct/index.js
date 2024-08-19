import Drawer from '@/components/Generic/Drawer';
import Title from '@/components/Generic/Title';
import React from 'react';

const AddProduct = ({ ...props }) => {
    const searchTerm = '';
    return (
        <Drawer position='right' id={props.id}
            title={<Title text='Add Product' />}
            className='p-4'
        >
            <div className='mb-4'>
                <label for='title' class='block mb-2 text-sm font-medium text-gray-900'>Product Title</label>
                <input type='text' id='simple-search'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Lenovo ThinkPad X1'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label for='category' class='block mb-2 text-sm font-medium text-gray-900'>Category</label>
                <input type='text' id='simple-search'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Laptop'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label for='brand' class='block mb-2 text-sm font-medium text-gray-900'>Brand Name</label>
                <input type='text' id='simple-search'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Lenovo'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label for='price' class='block mb-2 text-sm font-medium text-gray-900'>Price</label>
                <input type='number' id='simple-search'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Lenovo'
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label for='description' class='block mb-2 text-sm font-medium text-gray-900'>Product Description</label>
                <textarea
                    className='bg-secondary-50 border border-secondary-300 resize-y text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Budget-friendly laptop with a 15.6-inch Full HD display and decent performance.'
                    required=''
                    autoComplete='off'
                    rows='8'
                />
            </div>
            <div>
                <button type='submit' class='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800'>
                    Add Product
                </button>
            </div>
        </Drawer>
    );
};

export default AddProduct;