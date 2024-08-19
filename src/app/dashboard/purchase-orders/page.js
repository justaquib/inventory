/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import CreatePurchaseOrder from '@/components/Dashboard/PurchaseOrder/Create';
import IndexViewPurchaseOrder from '@/components/Dashboard/PurchaseOrder/View';
import React, { useState } from 'react';

const page = () => {
    const [purchaseOrder, setPurchaseOrder] = useState('View');
    return (
        <>
            {
                purchaseOrder === 'View'
                    ? (
                        <IndexViewPurchaseOrder
                            setPurchaseOrder={setPurchaseOrder}
                        />
                    )
                    : (
                        <CreatePurchaseOrder 
                            setPurchaseOrder={setPurchaseOrder}
                        />
                    )
            }
        </>
    );
};

export default page;