import React from 'react';
import { Input } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/header';

export default function Login() {
	return (
		<>
			<Header />
			<div className='flex flex-col py-20 w-full items-center'>
				<div className='text-center text-5xl font-sans font-bold text-gray-600'>
					Welcome Back
				</div>
				<div className='text-center max-w-xl text-xl px-20 text-gray-800 pt-10'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Diam maecenas mi non sed ut odio. Non, justo, sed
					facilisi et.
				</div>
				<div className='flex flex-col items-center pt-10 w-full'>
					<form className='mt-6 flex flex-col gap-5 w-[500px]'>
						<Input
							variant='static'
							type='text'
							className='w-full text-xl shadow-md px-5 bg-neutral-200 py-5 rounded-3xl'
							id='username'
							autoFocus
							placeholder='Username, Email & Phone Number'
						/>
						<Input
							variant='static'
							type='password'
							className='w-full text-xl shadow-md px-5 bg-neutral-200 py-5 rounded-3xl'
							id='password'
							autoFocus
							placeholder='Password'
						/>
						<Link href='/login' passHref>
							<div className='w-full font-semibold text-right text-gray-700 text-xl'>
								Forgot Password?
							</div>
						</Link>
						<button
							className='text-white text-3xl font-bold bg-orange-500 h-16 mt-8 button px-2 w-full rounded-3xl'
							type='submit'>
							Sign In
						</button>
					</form>
					<div className='w-full pt-10 text-center text-lg font-semibold'>
						Don{"'"}t have an account?{' '}
						<Link href='/register' passHref>
							<span className='text-pink-600 font-bold'>
								Sign Up
							</span>
						</Link>
					</div>
					<div className='pt-10 grid grid-cols-3 gap-3 justify-center items-center'>
						<div className='w-full h-1 bg-gradient-to-l from-red-500' />

						<div className='text-center text-lg font-sans'>
							Or Sign up With
						</div>

						<div className='w-full h-1 bg-gradient-to-r from-red-500' />
					</div>
					<div className='pt-10 grid grid-cols-3 gap-5 justify-items-center'>
						<div className='rounded-full bg-slate-100 h-20 w-20 border-2 border-orange-300'>
							<Image
								className='px-3 py-3'
								src='/logo/google.png'
								alt='logo'
								width={215}
								height={215}
							/>
						</div>
						<div className='rounded-full bg-slate-100 h-20 w-20 border-2 border-orange-300'>
							<Image
								className='px-3 py-3'
								src='/logo/facebook.png'
								alt='logo'
								width={215}
								height={215}
							/>
						</div>
						<div className='rounded-full bg-slate-100 h-20 w-20 border-2 border-orange-300'>
							<Image
								className='px-3 py-3'
								src='/logo/apple.png'
								alt='logo'
								width={215}
								height={215}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}