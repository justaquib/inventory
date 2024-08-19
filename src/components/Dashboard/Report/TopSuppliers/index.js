import Card from '@/components/Generic/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TopSuppliers = () => {
    const [customers, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    return (
        <Card
            width='sm'
            height='sm'
        >
            <h1 className='text-lg font-medium text-secondary-700'>Top Suppliers</h1>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white text-secondary-600 text-sm'>
                    <thead>
                        <tr>
                            <th className='py-2 px-4 border-b'>Sl</th>
                            <th className='py-2 px-4 border-b'>Supplier Name</th>
                            <th className='py-2 px-4 border-b'>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers && [...customers].sort((a, b) => a.amount - b.amount).slice(0, 5).map((customer, index) => (
                                <tr key={customer.poNo} className='hover:bg-gray-100'>
                                    <td className='py-2 px-4 border-b'>{index + 1}</td>
                                    <td className='py-2 px-4 border-b'>{customer.name}</td>
                                    <td className='py-2 px-4 border-b'>${customer.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default TopSuppliers;