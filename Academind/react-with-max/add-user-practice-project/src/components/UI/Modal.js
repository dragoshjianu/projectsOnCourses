import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// import Wrapper from '../Helpers/Wrapper';
import Button from './Button';
import Card from './Card';

import styles from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onClose}>Okay</Button>
			</footer>
		</Card>
	);
};

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClose} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onClose={props.onClose}
				/>,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default Modal;
