import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import styled from "styled-components";
import useAuth from "../../Hooks/useAuth";
import Options from "./Options";

const Span = styled.span`
	background: linear-gradient(90deg, #ed6292 25%, #ed5760 87.5%);
	border-radius: 10px;
	color: #fff;
	padding: 1px 8px;
	font-weight: 700;
	font-size: 0.9em;
	display: inline-flex;
`;

const Account = () => {
	const { user } = useAuth();
	const [money, setMoney] = useState([]);
	// console.log(user);
	useEffect(() => {
		fetch("https://dry-peak-78703.herokuapp.com/users")
			.then((res) => res.json())
			.then((data) => setMoney(data));
	}, []);

	return (
		<>
			<Navigation />
			<div className='text-black mt-10'>
				<h1 className='text-3xl md:text-4xl font-bold font-header'>
					View Your <Span>Account</Span>
				</h1>
				<div className='md:max-w-5xl mx-auto hover:shadow-xl mt-10 py-8 px-4 md:flex md:items-center md:justify-center'>
					<img
						className='rounded-full w-40 md:mr-20'
						src={user.photoURL}
						alt=''
					/>
					<div className='text-left'>
						<h1 className='text-2xl font-header font-bold'>
							{user.displayName}
						</h1>
						<h2 className='text-lg font-header font-base'>{user.email}</h2>
						{money
							.filter((money) => money.email === user.email)
							.map((money) =>
								money.balance ? (
									<div key={money.email}>
										<h2 className='text-xl font-header font-base'>
											Balance: {money.balance}
										</h2>
										<h2 className='text-xl font-header font-base'>
											Wallet: {money.walletAddress}
										</h2>
									</div>
								) : (
									<h2
										key={money.email}
										className='text-xl font-header font-base'
									>
										Balance: 0
									</h2>
								)
							)}
					</div>
				</div>
			</div>
			<hr />
			<Options />
		</>
	);
};

export default Account;
