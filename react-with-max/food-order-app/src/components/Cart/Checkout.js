import React from 'react';

import styles from './Checkout.module.css';

const Checkout = (props) => {
	const confirmHandler = (event) => {
		event.preventDefault();
	};
	return (
		<form onSubmit={confirmHandler}>
			<div className={styles.control}>
				<label>
					Your Name
					<input type='text' id='name' />
				</label>
			</div>
			<div className={styles.control}>
				<label>
					Adress
					<input type='text' id='street' />
				</label>
			</div>
			<div className={styles.control}>
				<label>
					Postal Code
					<input type='text' id='postal' />
				</label>
			</div>
			<div className={styles.control}>
				<label>
					City
					<input type='text' id='city' />
				</label>
			</div>
			<button type='button' onClick={props.onCloseCheckout}>
				Close
			</button>
			<button>Confirm</button>
		</form>
	);
};

export default Checkout;
