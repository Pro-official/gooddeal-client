import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../../components/Navigation";
import useAuth from "../../Hooks/useAuth";

const FundPassword = () => {
	const { user } = useAuth();
	const [pass, setPass] = useState([]);
	const fpasswordRef = useRef();
	const fpasswordRef2 = useRef();
	const fpassPrev = useRef();
	const emailRef = useRef();
	const history = useHistory();

	useEffect(() => {
		fetch(`https://dry-peak-78703.herokuapp.com/users`)
			.then((res) => res.json())
			.then((data) => setPass(data));
	}, []);

	const HandlePass = () => {
		const fundPass = fpasswordRef.current.value;
		const fundPass2 = fpassPrev.current.value;
		const fundPass3 = fpasswordRef2.current.value;
		console.log(fundPass2);
		const email = emailRef.current.value;
		const fundPassword = { fundPass, email };
		// console.log(depositData);

		if (fundPass2 === fundPass3) {
			console.log("Matched");
			fetch(`https://dry-peak-78703.herokuapp.com/fpass/${email}`, {
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(fundPassword),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.modifiedCount) {
						alert("Fund Password Added successfully");
						// e.target.reset();
						history.push("/account");
					}
				});
		}
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
							<span className='px-2 text-gray-500 bg-white'>Fund Password</span>
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
							{pass
								.filter((pass) => pass.email === user.email)
								.map((pass) =>
									pass.fundPass ? (
										<>
											<div className='w-full'>
												<div className=' relative '>
													<input
														type='password'
														id='search-form-name'
														className=' rounded-lg border-transparent flex-1 appearance-none border-2 border-purple-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
														placeholder='Previous Fund Password'
														required
														name='password'
														ref={fpasswordRef2}
													/>
												</div>
												<input
													className='hidden'
													type='text'
													ref={fpassPrev}
													defaultValue={pass.fundPass}
												/>
											</div>
											<div className='w-full'>
												<div className=' relative '>
													<input
														type='password'
														id='search-form-name'
														className=' rounded-lg border-transparent flex-1 appearance-none border-2 border-purple-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
														placeholder='Fund Password'
														required
														name='password'
														ref={fpasswordRef}
													/>
												</div>
											</div>
										</>
									) : (
										<div className='w-full'>
											<div className=' relative '>
												<input
													type='password'
													id='search-form-name'
													className=' rounded-lg border-transparent flex-1 appearance-none border-2 border-purple-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
													placeholder='Create Fund Password'
													required
													name='password'
													ref={fpasswordRef}
												/>
											</div>
										</div>
									)
								)}
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

export default FundPassword;
