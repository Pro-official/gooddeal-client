import { useEffect, useRef, useState } from "react";
import useAuth from "../../Hooks/useAuth";
// import { useForm, ValidationError } from "@formspree/react";
import { useHistory } from "react-router-dom";

export default function Example() {
	const history = useHistory();
	const { user } = useAuth();
	const [money, setMoney] = useState([]);
	const nameRef = useRef();
	const emailRef = useRef();
	const addressRef = useRef();
	const amountRef = useRef();
	const balanceRef = useRef();

	useEffect(() => {
		fetch("https://dry-peak-78703.herokuapp.com/users")
			.then((res) => res.json())
			.then((data) => setMoney(data));
	}, []);

	const HandleDb = () => {
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const address = addressRef.current.value;
		const amount = amountRef.current.value;
		const balance = balanceRef.current.value;
		const newBalance = parseInt(amount) + parseInt(balance);
		const depositData = { name, email, address, newBalance };

		fetch(`https://dry-peak-78703.herokuapp.com/deposit/${email}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(depositData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					alert("Deposit Successful");
					history.push("/home");
				}
			});
	};

	return (
		<div className='flex flex-col mt-8 md:max-w-3xl'>
			<form>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
							<table className='min-w-full divide-y divide-gray-200'>
								<thead className='bg-gray-50'>
									<tr>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Min. Deposit
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Max. Deposit
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Deposit Countdown
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									<tr>
										<td className='px-6 py-4 whitespace-nowrap'>
											<div className='flex items-center'>
												<div className='ml-4'>
													<div className='text-sm font-medium text-gray-900'>
														100
													</div>
												</div>
											</div>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<div className='text-sm font-medium text-gray-900'>
												10,000
											</div>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
												6 Minutes
											</span>
										</td>
									</tr>
									<tr>
										<td className='px-6 py-4 whitespace-nowrap'>
											<h1 className='underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center'>
												Name :
											</h1>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<input
												className='border-2 h-12 border-slate-300'
												type='text'
												defaultValue={user.displayName}
												name='name'
												ref={nameRef}
											/>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
												Active
											</span>
										</td>
									</tr>
									<tr>
										<td className='px-6 py-4 whitespace-nowrap'>
											<h1 className='underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center'>
												Email:
											</h1>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<input
												className='border-2 h-12 border-slate-300'
												type='email'
												defaultValue={user.email}
												name='email'
												ref={emailRef}
											/>
											{/* <ValidationError
												prefix='Email'
												field='email'
												errors={state.errors}
											/> */}
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
												Active
											</span>
										</td>
									</tr>
									<tr>
										<td className='px-6 py-4 whitespace-nowrap'>
											<h1 className='underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center'>
												Wallet:
											</h1>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											{money
												.filter((money) => money.email === user.email)
												.map((money) =>
													money.walletAddress ? (
														<input
															className='border-2 p-3 w-56 h-12 border-slate-300'
															type='text'
															defaultValue={money.walletAddress}
															name='address'
															required
															ref={addressRef}
														/>
													) : (
														<input
															className='border-2 p-3 w-56 h-12 border-slate-300'
															type='text'
															name='address'
															defaultValue='Enter your wallet address'
															required
															ref={addressRef}
														/>
													)
												)}
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
												Enter Wallet Address
											</span>
										</td>
									</tr>
									<tr>
										<td className='px-6 py-4 whitespace-nowrap'>
											<h1 className='underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center'>
												Deposit:
											</h1>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<input
												className='border-2 h-12 border-slate-300'
												type='text'
												placeholder='Deposit Amount'
												name='amount'
												required
												ref={amountRef}
											/>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
												Enter Deposit Amount
											</span>
										</td>
									</tr>
									<tr>
										<td className='px-6 py-4 whitespace-nowrap'>
											<h1 className='underline decoration-sky-500 underline-offset-2 text-xl text-gray-500 font-semibold md:flex md:items-center'>
												Balance:
											</h1>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											{money
												.filter((money) => money.email === user.email)
												.map((money) =>
													money.balance ? (
														<input
															className='border-2 h-12 border-slate-300'
															type='text'
															name='balance'
															defaultValue={money.balance}
															required
															ref={balanceRef}
														/>
													) : (
														<input
															className='border-2 h-12 border-slate-300'
															type='text'
															name='balance'
															defaultValue='0'
															required
															ref={balanceRef}
														/>
													)
												)}
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
												Your current balance
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<button onClick={HandleDb}>
					<input
						className='bg-black text-white w-28 mt-4 ml-5 px-3 py-2 font-header font-bold rounded-lg cursor-pointer focus:bg-white focus:border-black focus:text-black'
						value='DEPOSIT'
					/>
				</button>
			</form>
		</div>
	);
}
