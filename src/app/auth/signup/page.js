/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/AuthStore';

const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('employee');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const signup = useAuthStore((state) => state.signup);

    const handleSignup = () => {
        if (password !== confirmPassword) {
          setMessage('Passwords do not match');
          return;
        }
    
        const result = signup(email, password, role);
    
        if (result.success) {
          setMessage('Signup successful! Redirecting to login...');
          setTimeout(() => {
            router.push('/auth/login');
          }, 2000);
        } else {
          setMessage(result.message);
        }
      };

    return (
        <div className='w-1/4 bg-white min-h-[680px] rounded-xl shadow-md px-12 py-8 text-slate-700 flex flex-col justify-evenly gap-6'>
            <div>
                <h1 className='text-4xl font-semibold text-center mb-4'>Create an account</h1>
                <h2 className='text-2xl font-medium text-slate-400 text-center'>Signup</h2>
            </div>
            <div className='w-full'>
                <div className='flex justify-center mb-4'>
                    {message && <p>{message}</p>}
                </div>
                <input
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                    className='border border-slate-400 px-6 py-3 rounded-full w-full mb-8' />
                <input
                    type='password'
                    required
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border border-slate-400 px-6 py-3 rounded-full w-full mb-8' />
                <input
                    type='password'
                    required
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='border border-slate-400 px-6 py-3 rounded-full w-full mb-8' />
                <div className='flex justify-between mb-8'>
                    <div className='flex items-center gap-3'>
                        <span className='font-semibold'>Employee</span>
                        <input
                            type='radio' 
                            className='cursor-pointer'
                            checked={role === 'employee'}
                            onChange={() => setRole('employee')}
                            name='user-type' />
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='font-semibold'>Manager</span>
                        <input 
                            type='radio'
                            className='cursor-pointer' 
                            checked={role === 'manager'}
                            onChange={() => setRole('manager')}
                            name='user-type' />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <button onClick={handleSignup} className='bg-primary-500 hover:bg-primary-600 text-white font-medium hover:font-semibold px-4 py-2 rounded-full border-2 border-primary-700 w-28'>Signup</button>
                    <Link href='forgot-password' className='font-medium hover:text-primary-800'>Forgot your password?</Link>
                </div>
            </div>
            <div className='text-center'>
                <Link href='login'>Already have an account? <span className='font-semibold'>Sign in</span></Link>
            </div>
        </div>
    );
};

export default page;