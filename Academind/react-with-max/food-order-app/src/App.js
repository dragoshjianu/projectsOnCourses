import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showCartHandler = () => {
		setIsModalVisible(true);
	};

	const hideCartHandler = () => {
		setIsModalVisible(false);
	};

	return (
		<CartProvider>
			{isModalVisible && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
