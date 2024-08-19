import Modal from '@/components/Generic/Modal';
import { useToggleElement } from '@/hooks/useToggleElement';
import React from 'react';

const DeleteItem = ({ id, data }) => {
    const { toggle: toggleDeleteModal } = useToggleElement(); 
  return (
    <Modal 
        id={id}
        size='sm'
    >
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-xl font-bold'>Are you sure you want to delete?</h1>
            <h2 className='text-lg font-semibold text-secondary-500'>{data.name}</h2>
            <div className='flex gap-4 my-4'>
                <button className='rounded w-32 py-2 border border-transparent bg-red-500 text-white hover:bg-red-600'>Yes</button>
                <button className='rounded w-32 py-2 border border-secondary-900' onClick={() => toggleDeleteModal(id)}>Cancel</button>
            </div>
        </div>
    </Modal>
  );
};

export default DeleteItem;