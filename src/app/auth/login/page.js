/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import useAuthStore from '@/store/AuthStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';

function page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const login = useAuthStore((state) => state.login);

    const handleLogin = () => {
        const success = login(email, password);
        if (success) {
            router.push('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };
    return (
        <div className='w-1/4 bg-white min-h-[680px] rounded-xl shadow-md px-12 py-8 text-secondary-800 flex flex-col justify-evenly gap-6'>
            <div>
                <h1 className='text-4xl font-extrabold text-center mb-4'>Welcome</h1>
                <h2 className='text-2xl font-medium text-slate-400 text-center'>User Login</h2>
            </div>
            <div className='w-full'>
                <div className='flex justify-center mb-4'>
                    {error && <p className='text-red-600'>{error}</p>}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    className='border border-slate-400 px-6 py-3 rounded-full w-full mb-8' />
                <div className='flex justify-between items-center'>
                    <button
                        onClick={() => handleLogin()}
                        className='bg-primary-500 hover:bg-primary-600 text-white font-medium hover:font-semibold px-4 py-2 rounded-full border-2 border-primary-700 w-28'
                    >
                        Login
                    </button>
                    <Link href='forgot-password' className='font-medium hover:text-primary-800'>Forgot your password?</Link>
                </div>
            </div>
            <div className='text-center'>
                <Link href='signup'>Didn&apos;t have an account? <span className='font-semibold'>Sign up</span></Link>
            </div>
        </div>
    );
}

export default page;