import { useEffect, useRef, useState } from "react";
import Navigation from "../../components/Navigation";
import styled from "styled-components";

const Table = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

const Dashboard = () => {
	const [users, setUsers] = useState([]);
	const balanceRef = useRef();

	useEffect(() => {
		fetch("https://dry-peak-78703.herokuapp.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	const handleUpdate = () => {
		// eslint-disable-next-line array-callback-return
		users.map((user) => {
			if (user.balance) {
				const percentBalance = (user.balance * 1) / 100;
				const newBalance = user.balance + percentBalance;
				const data = { newBalance };
				fetch(`http://localhost:5000/upbalance`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				});
			} else {
				console.log(0);
			}
		});
	};

	return (
		<>
			<Navigation />
			<div>
				<h1 className='font-bold text-3xl font-header mt-10'>Dashboard</h1>
			</div>
			<button
				onClick={handleUpdate}
				className='mt-4 text-center mx-auto flex text-blue-600 cursor-pointer hover:text-blue-800 hover:underline hover:underline-offset-4 items-center '
			>
				<h1 className='text-xl font-bold mr-3'>
					Update balance of all account{" "}
				</h1>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 mt-1 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M17 8l4 4m0 0l-4 4m4-4H3'
					/>
				</svg>
			</button>
			<div className='container mx-auto px-4 sm:px-8 w-full md:max-w-7xl'>
				<div className='py-8'>
					<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
						<div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
							<div className='grid grid-flow-col gap-4 grid-rows-4 px-5 py-5 font-header font-bold'>
								<h1 className='row-span-3 text-left'>Profile</h1>
								<h1 className='row-span-3 text-center'>Update</h1>
								<h1 className='row-span-3 text-center'>Action</h1>
								<h1 className='row-span-3 text-center'>Balance</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='-mt-20 mx-auto px-4 sm:px-8 w-full md:max-w-7xl'>
				<div className='py-8'>
					{users.map((user) => (
						<div key={user.email}>
							<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
								<div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
									<Table className='px-3 py-2'>
										<h1 className='row-span-3 text-left'>{user.displayName}</h1>
										<button className='row-span-3 text-center bg-green-200 w-20 py-2 mx-auto rounded-lg font-bold'>
											Update
										</button>
										<h1 className='row-span-3'>
											<button className='bg-red-600 text-white font-bold w-16 h-8 rounded-lg'>
												Delete
											</button>
										</h1>
										{user.balance ? (
											<h1 ref={balanceRef} className='row-span-3'>
												{user.balance}
											</h1>
										) : (
											<h1 className='row-span-3'>00</h1>
										)}
									</Table>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
