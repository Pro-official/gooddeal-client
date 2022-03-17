import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../../components/Navigation";
import useAuth from "../../Hooks/useAuth";

const WalletAddress = () => {
	const { user } = useAuth();
	const walletRef = useRef();
	const emailRef = useRef();
	const history = useHistory();

	const HandlePass = () => {
		const wallet = walletRef.current.value;
		const email = emailRef.current.value;
		const newWallet = { wallet, email };

		fetch(`https://dry-peak-78703.herokuapp.com/wallet/${email}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newWallet),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					alert("Wallet Address Added successfully");
					// e.target.reset();
					history.push("/account");
				}
			});
	};

	return (
		<>
			<Navigation />
			<div className='bg-white rounded-lg shadow-lg sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden mt-10'>
				<div className='px-4 py-8 sm:px-10'>
					<div className='relative mt-6'>
						<div className='absolute inset-0 flex items-center'>
							<div className='w-full border-t border-gray-300'></div>
						</div>
						<div className='relative flex justify-center text-sm leading-5'>
							<span className='px-2 text-gray-500 bg-white'>
								Wallet Address
							</span>
						</div>
					</div>
					<div className='mt-6'>
						<div className='w-full space-y-6'>
							<div className='w-full'>
								<div className=' relative '>
									<input
										type='text'
										id='search-form-price'
										name='name'
										disabled
										className=' rounded-lg border-transparent flex-1 appearance-none border-2 border-black w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										defaultValue={user.displayName}
									/>
								</div>
							</div>
							<div className='w-full'>
								<div className=' relative '>
									<input
										type='email'
										id='search-form-location'
										disabled
										className=' rounded-lg border-transparent flex-1 appearance-none border-2 border-black w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										defaultValue={user.email}
										ref={emailRef}
									/>
								</div>
							</div>
							<div className='w-full'>
								<div className=' relative flex'>
									<input
										type='text'
										id='search-form-name'
										className='rounded-lg border-transparent flex-1 appearance-none border-2 border-purple-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Wallet Address'
										required
										name='wallet'
										ref={walletRef}
									/>
									<svg
										className='w-6 h-6 -ml-8 mt-2'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z'></path>
										<path
											fill-rule='evenodd'
											d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
											clip-rule='evenodd'
										></path>
									</svg>
								</div>
							</div>
							<div>
								<span className='block w-full rounded-md shadow-sm'>
									<button
										onClick={HandlePass}
										type='submit'
										className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
									>
										Submit
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10'>
					<p className='text-xs leading-5 text-slate-500'>
						It is strongly recommended that users set a password by mixing
						numbers, uppercase and lowercase letters to enhance security
					</p>
				</div>
			</div>
		</>
	);
};

export default WalletAddress;
