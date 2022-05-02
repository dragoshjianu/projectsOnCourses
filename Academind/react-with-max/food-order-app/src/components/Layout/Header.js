import React from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealsImg from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={styles['main-image']}>
				<img
					src={mealsImg}
					className={styles['main-image']}
					alt='A table full of delicious food'
				/>
			</div>
		</>
	);
};

export default Header;
