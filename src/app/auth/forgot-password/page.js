import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <div className='w-2/6 bg-white min-h-[480px] rounded-xl shadow-md px-12 py-8 text-secondary-800 flex flex-col justify-evenly gap-6'>
        <div>
            <h1 className='text-4xl font-extrabold text-center mb-4'>Reset your password</h1>
            <h2 className='text-xl font-light text-slate-400 text-center'>We send you an email with instruction to reset your password.</h2>
        </div>
        <div className='w-full'>
            
            <input type='email' required  placeholder='Enter your email address' className='border border-slate-400 px-6 py-3 rounded-full w-full mb-8' />
            <button 
                className='bg-primary-500 hover:bg-primary-600 text-white font-medium hover:font-semibold px-4 py-2 rounded-full border-2 border-primary-700 w-full mb-8'
            >
                Reset
            </button>
            <div className='flex justify-between items-center'>
                <Link href='signup'>Didn&apos;t have an account? <span className='font-semibold'>Sign up</span></Link>
                <Link href='login' className='font-medium hover:text-primary-800'>Remember your password?</Link>
            </div>
        </div>
        <div className='text-center'>
        </div>
    </div>
  );
}

export default page;