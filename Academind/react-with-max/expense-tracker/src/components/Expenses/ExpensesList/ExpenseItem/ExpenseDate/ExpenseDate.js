import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
	const month = props.date.toLocaleString('ro-RO', { month: 'long' });
	const capitalMonth = month[0].toUpperCase() + month.slice(1).toLowerCase();
	const day = props.date.toLocaleString('ro-RO', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{capitalMonth}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-date__day'>{day}</div>
		</div>
	);
};

ExpenseDate.propTypes = {};

export default ExpenseDate;
