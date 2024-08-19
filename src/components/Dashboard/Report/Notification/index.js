import Card from '@/components/Generic/Card';
import Icon from '@/components/Generic/Icon';
import React from 'react';

const Notification = () => {
    return (
        <Card
            width='sm'
        >
            <h1 className='text-lg font-medium text-secondary-700'>Notification</h1>
            <div className='flex flex-col gap-4 items-center justify-center h-full'>
                <Icon name='bell-slash' className='w-10 h-10 text-secondary-500' />
                <h1 className='font-semibold text-secondary-500 text-2xl'>No Notification</h1>
            </div>
        </Card>
    );
};

export default Notification;