import React from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation";
import WithdrawTable from "./WithdrawTable";

const Span = styled.span`
	background: linear-gradient(90deg, #ed6292 25%, #ed5760 87.5%);
	border-radius: 10px;
	color: #fff;
	padding: 1px 8px;
	font-weight: 700;
	font-size: 0.9em;
	display: inline-flex;
`;

const Withdraw = () => {
	return (
		<>
			<Navigation />
			<div className='pt-9 mt-2 bg-white'>
				<h1 className='text-3xl md:text-4xl font-bold font-header'>
					Withdraw Your <Span>Money</Span>
				</h1>
				<div className='max-w-7xl mx-auto mt-14 p-10 text-left shadow-xl pb-10'>
					<h1 className='text-xl font-semibold md:flex md:items-center'>
						<span className='underline text-gray-500 decoration-sky-500 underline-offset-2'>
							Payment Method:
						</span>{" "}
						<svg
							className='w-10 h-10 ml-10 mr-2'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z'
								clipRule='evenodd'
							/>
						</svg>{" "}
						<span className='font-bold font-title text-gray-500'>VIRTUAL</span>
					</h1>
					{/* <h1 className='text-xl font-semibold mt-3 md:flex md:items-center'>
						<span className='underline text-gray-500 decoration-sky-500 underline-offset-2'>
							Withdraw Method:
						</span>
						<p className='text-gray-500'>
							<input
								required
								type='checkbox'
								value='USDT-TRC20'
								class='default:ring-2 ml-4 w-7 h-4'
							/>{" "}
							USDT-TRC20
						</p>
					</h1> */}
					<WithdrawTable />
				</div>
			</div>
		</>
	);
};

export default Withdraw;
