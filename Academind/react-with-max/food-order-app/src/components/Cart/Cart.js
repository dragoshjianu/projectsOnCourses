import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

import styles from './Cart.module.css';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSumbit] = useState(false);
	const cartContext = useContext(CartContext);

	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
	const hasItems = cartContext.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartContext.removeItem(id);
	};
	const cartItemAddHandler = (item) => {
		cartContext.addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const submitOrderHandler = async (userData) => {
		setIsCheckout(true);
		await fetch(
			'https://react-http-f44be-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({
					user: userData,
					orderedItems: cartContext.items,
				}),
			}
		);
		setIsSubmitting(false);
		setDidSumbit(true);
		cartContext.clearCart();
	};

	// const closeCheckourtHandler = () => {
	// 	setIsCheckout(false);
	// };

	const cartItems = (
		<ul className={styles['cart-items']}>
			{cartContext.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const modalActions = (
		<div className={styles.actions}>
			<button className={styles['button-alt']} onClick={props.onClose}>
				Close
			</button>
			{hasItems && (
				<button className={styles.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && (
				<Checkout onConfirm={submitOrderHandler} onCloseCheckout={props.onClose} />
			)}
			{!isCheckout && modalActions}
		</>
	);

	const isSubmittingModalContent = <p>Sending Order Data...</p>;
	const didSubmitModalContent = <p>Successfully sent the order!</p>;
	return (
		<Modal onHideCart={props.onClose}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;
