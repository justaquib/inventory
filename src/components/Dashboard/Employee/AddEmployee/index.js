import Drawer from '@/components/Generic/Drawer';
import Title from '@/components/Generic/Title';
import React from 'react';
import * as dayjs from 'dayjs';

const AddEmployee = ({ ...props }) => {
    const searchTerm = '';
    return (
        <Drawer
            position='right'
            id={props.id}
            title={<Title text='Add Employee' />}
            className='p-4'
        >
            <div className='mb-4'>
                <label for='name' className='block mb-2 text-sm font-medium text-gray-900'>Employee Name</label>
                <input type='text' id='employee-name'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Branden Miller'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label for='gender' className='block mb-2 text-sm font-medium text-gray-900'>Gender</label>
                <input type='text' id='gender'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Male'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label for='dob' className='block mb-2 text-sm font-medium text-gray-900'>Date of birth</label>
                <input type='date' id='birthday' name='birthday' className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2' />
            </div>
            <div className='mb-4'>
                <label for='role' className='block mb-2 text-sm font-medium text-gray-900'>Role</label>
                <input type='text' id='Employee'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Employee'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label for='status' className='block mb-2 text-sm font-medium text-gray-900'>Status</label>
                <input type='text' id='Status'
                    className='bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder='Active'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required=''
                    autoComplete='off'
                />
            </div>
            <div className='mb-4'>
                <label for='status' className='block mb-2 text-sm font-medium text-gray-900'>Joinning Date</label>
                <input type='text' id='Status'
                    className='border border-secondary-300 text-secondary-700 bg-secondary-200/55 cursor-not-allowed text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 my-2'
                    placeholder=''
                    value={dayjs().format('DD/MM/YYYY')}
                    required=''
                    autoComplete='off'
                    disabled
                />
            </div>
            <div>
                <button type='submit' className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800'>
                    Add Employee
                </button>
            </div>
        </Drawer>
    );
};

export default AddEmployee;