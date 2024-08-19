import Container from '@/components/Generic/Container';
import Icon from '@/components/Generic/Icon';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const IndexViewPurchaseOrder = ({ setPurchaseOrder }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [filterPayment, setFilterPayment] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/json/purchaseOrder.json');
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const filteredData = data?.filter(item =>
        item.payment.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterPayment ? item.payment === filterPayment : true)
    );
    const getKeyForSort = (data) => {
        if (data && data.length > 0) {
            return Object.keys(data[0]);
        }
        return [];
    };
    const sortByKey = getKeyForSort(data);
    const sortedData = filteredData?.sort((a, b) => {
        let comparison = 0;
        const aValue = a[sortOption];
        const bValue = b[sortOption];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            comparison = aValue.localeCompare(bValue);
        } else if (typeof aValue === 'number' && typeof bValue === 'number') {
            comparison = aValue - bValue;
        }

        return sortOrder === 'asc' ? comparison : -comparison;
    });
    const handleSort = (option) => {
        setSortOption(option);
        setSortOrder((prevOrder) => prevOrder === 'asc' ? 'desc' : 'asc');
    };
    return (
        <Container>
            <div className='px-6 pt-4 pb-2 border-b flex flex-row justify-between items-center'>
                <h1 className='font-semibold text-2xl' data-toggle='tooltip' data-placement='top' data-text='Product details and all can be seen here'>Purchase Order</h1>
            </div>
            <section className='rounded-b-lg'>
                <div className='mx-auto w-full'>
                    <div className='bg-white relative rounded-b-lg rounded-t-0'>
                        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4'>
                            <div className='w-full md:w-1/2'>
                                <form className='flex items-center'>
                                    <label for='simple-search' className='sr-only'>Search</label>
                                    <div className='relative w-full'>
                                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                            <svg aria-hidden='true' className='w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                                <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
                                            </svg>
                                        </div>
                                        <input type='text' id='simple-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 ' placeholder='Search' required='' />
                                    </div>
                                </form>
                            </div>
                            <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
                                <button type='button' onClick={() => setPurchaseOrder('Edit')} className='flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2'>
                                    <Icon name='plus' className='w-4 h-4' />
                                    Create Purchase Order
                                </button>
                                <div className='flex items-center space-x-3 w-full md:w-auto'>
                                    <button id='actionsDropdownButton' data-dropdown-toggle='actionsDropdown' className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200' type='button'>
                                        <svg className='-ml-1 mr-1.5 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                                            <path clipRule='evenodd' fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                                        </svg>
                                        Actions
                                    </button>
                                    <div id='actionsDropdown' className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow'>
                                        <ul className='py-1 text-sm text-gray-700' aria-labelledby='actionsDropdownButton'>
                                            <li>
                                                <a href='#' className='block py-2 px-4 hover:bg-gray-100'>Mass Edit</a>
                                            </li>
                                        </ul>
                                        <div className='py-1'>
                                            <a href='#' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'>Delete all</a>
                                        </div>
                                    </div>
                                    <button id='filterDropdownButton' data-dropdown-toggle='filterDropdown' className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200' type='button'>
                                        <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' className='h-4 w-4 mr-2 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
                                            <path fillRule='evenodd' d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z' clipRule='evenodd' />
                                        </svg>
                                        Filter
                                        <svg className='-mr-1 ml-1.5 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                                            <path clipRule='evenodd' fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                                        </svg>
                                    </button>
                                    <div id='filterDropdown' className='z-10 hidden w-48 p-3 bg-white rounded-lg shadow'>
                                        <h6 className='mb-3 text-sm font-medium text-gray-900'>Choose brand</h6>
                                        <ul className='space-y-2 text-sm' aria-labelledby='filterDropdownButton'>
                                            <li className='flex items-center'>
                                                <input id='apple' type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500' />
                                                <label for='apple' className='ml-2 text-sm font-medium text-gray-900'>Apple (56)</label>
                                            </li>
                                            <li className='flex items-center'>
                                                <input id='fitbit' type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500' />
                                                <label for='fitbit' className='ml-2 text-sm font-medium text-gray-900'>Microsoft (16)</label>
                                            </li>
                                            <li className='flex items-center'>
                                                <input id='razor' type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500' />
                                                <label for='razor' className='ml-2 text-sm font-medium text-gray-900'>Razor (49)</label>
                                            </li>
                                            <li className='flex items-center'>
                                                <input id='nikon' type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500' />
                                                <label for='nikon' className='ml-2 text-sm font-medium text-gray-900'>Nikon (12)</label>
                                            </li>
                                            <li className='flex items-center'>
                                                <input id='benq' type='checkbox' value='' className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500' />
                                                <label for='benq' className='ml-2 text-sm font-medium text-gray-900'>BenQ (74)</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden overflow-y-auto max-h-[640px]'>
                            <table className='w-full text-sm text-left text-gray-500'>
                                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                                    <tr>
                                        <th scope='col' className='px-4 py-3'>Customer name</th>
                                        <th scope='col' className='px-4 py-3'>Address</th>
                                        <th scope='col' className='px-4 py-3'>PO no.</th>
                                        <th scope='col' className='px-4 py-3'>Amount</th>
                                        <th scope='col' className='px-4 py-3'>Payment</th>
                                        <th scope='col' className='px-4 py-3'>Date</th>
                                        <th scope='col' className='px-4 py-3'>
                                            <span className='sr-only'>Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    sortedData.map((po, index) => (
                                    <tr className='border-b' key={index}>
                                        <th scope='row' className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap '>{po.name}</th>
                                        <td className='px-4 py-3'>{po.address}</td>
                                        <td className='px-4 py-3'>{po.poNo}</td>
                                        <td className='px-4 py-3'>${po.amount}</td>
                                        <td className='px-4 py-3'>{po.payment}</td>
                                        <td className='px-4 py-3'>{po.date}</td>
                                        <td className='px-4 py-3 flex items-center justify-end'>
                                            <button id='apple-imac-27-dropdown-button' data-dropdown-toggle='apple-imac-27-dropdown' className='inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none  ' type='button'>
                                                <svg className='w-5 h-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                                                </svg>
                                            </button>
                                            <div id='apple-imac-27-dropdown' className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow  '>
                                                <ul className='py-1 text-sm text-gray-700 ' aria-labelledby='apple-imac-27-dropdown-button'>
                                                    <li>
                                                        <a href='#' className='block py-2 px-4 hover:bg-gray-100 '>Show</a>
                                                    </li>
                                                    <li>
                                                        <a href='#' className='block py-2 px-4 hover:bg-gray-100 '>Edit</a>
                                                    </li>
                                                </ul>
                                                <div className='py-1'>
                                                    <a href='#' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100  '>Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                        <nav className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4' aria-label='Table navigation'>
                        </nav>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default IndexViewPurchaseOrder;