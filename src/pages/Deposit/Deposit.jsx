import React from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation";
import Table from "./Table";

const Span = styled.span`
	background: linear-gradient(90deg, #ed6292 25%, #ed5760 87.5%);
	border-radius: 10px;
	color: #fff;
	padding: 1px 8px;
	font-weight: 700;
	font-size: 0.9em;
	display: inline-flex;
`;

const Deposite = () => {
	return (
		<>
			<Navigation />
			<div className='pt-9 mt-2 bg-white'>
				<h1 className='text-xl sm:text-3xl md:text-4xl font-bold font-header'>
					Deposit Your <Span>Money</Span>
				</h1>
				<div className='max-w-7xl mx-auto mt-14 p-10 md:text-left text-center shadow-xl '>
					<h1 className='text-base md:text-xl font-semibold md:flex md:items-center'>
						<span className='underline text-gray-500 decoration-sky-500 underline-offset-2'>
							Payment Method:
						</span>
						<span className='font-bold font-title text-gray-500 ml-3'>VIRTUAL</span>
					</h1>
					<Table />
				</div>
			</div>
		</>
	);
};

export default Deposite;
