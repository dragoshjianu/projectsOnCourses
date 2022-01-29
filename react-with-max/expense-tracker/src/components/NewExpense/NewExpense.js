import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
	const [openForm, setOpenForm] = useState(false);

	const openFormHandler = () => {
		setOpenForm(true); //or (!openForm)
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		console.log(expenseData);
		props.onAddExpense(expenseData);
		setOpenForm(false); //or (!openForm)
	};

	const cancelFormHandler = () => {
		setOpenForm(false); //or (!openForm)
	};

	return (
		<div className='new-expense'>
			{!openForm && <button onClick={openFormHandler}>Add New Expense</button>}
			{openForm && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancelForm={cancelFormHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
