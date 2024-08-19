import Card from '@/components/Generic/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TopProducts = () => {
    const [products, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/json/products.json');
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <Card
            width='sm'
            height='sm'
        >
            <h1 className='text-lg font-medium text-secondary-700'>Top Product</h1>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white text-secondary-600 text-sm'>
                    <thead>
                        <tr>
                            <th className='py-2 px-4 border-b'>ID</th>
                            <th className='py-2 px-4 border-b'>Product Name</th>
                            <th className='py-2 px-4 border-b'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.slice(0, 5).map((product) => (
                                <tr key={product.id} className='hover:bg-gray-100'>
                                    <td className='py-2 px-4 border-b'>{product.id}</td>
                                    <td className='py-2 px-4 border-b'>{product.name}</td>
                                    <td className='py-2 px-4 border-b'>{product.quantity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default TopProducts;