import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

import './ExpenseList.css';

const ExpenseList = (props) => {
	const [filteredYear, setFilteredYear] = useState('all');

	const filterChangeHandler = (selectedYear) => {
		console.log('from List');
		setFilteredYear(selectedYear);
	};

	let expensesContent = <p>No expensese found</p>;

	if (filteredYear === 'all') {
		expensesContent = props.items.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	const filteredData = props.items.filter(
		(year) => year.date.getFullYear().toString() === filteredYear
	);

	if (filteredData.length > 0) {
		expensesContent = filteredData.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onFilterYearData={filterChangeHandler} />
				{expensesContent}
			</Card>
		</div>
	);
};

export default ExpenseList;
