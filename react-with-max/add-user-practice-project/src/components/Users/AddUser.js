import React, { useState, useRef } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

import styles from './AddUsers.module.css';

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		// Validate form Inputs
		if (enteredName.trim().lenght === 0 || enteredUserAge.trim().lenght === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (+enteredUserAge < 1) {
			setError({
				title: 'Invalid age input',
				message: 'Please enter a valid age (>0)',
			});
			return;
		}

		// store user data as object
		const userData = {
			id: Math.random().toString(),
			username: enteredName,
			age: enteredUserAge,
		};
		console.log('From Form');
		console.log(userData);

		props.onAddUser(userData);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	const closeModalHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && (
				<Modal title={error.title} message={error.message} onClose={closeModalHandler} />
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input type='text' name='username' id='username' ref={nameInputRef} />
					<label htmlFor='age'>Age (Years)</label>
					<input type='number' name='age' id='age' ref={ageInputRef} />
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
