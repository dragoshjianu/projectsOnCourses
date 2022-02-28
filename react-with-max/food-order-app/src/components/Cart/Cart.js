import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

import styles from './Cart.module.css';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
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
	return (
		<Modal onHideCart={props.onClose}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onCloseCheckout={props.onClose} />}
			{!isCheckout && modalActions}
		</Modal>
	);
};

export default Cart;
