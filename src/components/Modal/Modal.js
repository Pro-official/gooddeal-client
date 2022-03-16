import React from "react";
import "./Modal.css";

const Modal = ({ setModalOpen }) => {
	return (
		<div className='modalBackground'>
			<div className='modalContainer'>
				<div className='titleCloseBtn'>
					<button
						onClick={() => {
							setModalOpen(false);
						}}
					>
						X
					</button>
				</div>
				<div className='body'>
					<p>
						20% will be cut from the withdrawal amount. Are you sure you want to
						proceed?
					</p>
				</div>
				<div className='footer'>
					<button id='cancelBtn'>Proceed</button>
					<button
						onClick={() => {
							setModalOpen(false);
						}}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
