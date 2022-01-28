import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

import './ExpenseList.css';

const ExpenseList = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		console.log('from List');
		setFilteredYear(selectedYear);
	};
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onFilterYearData={filterChangeHandler} />

				{props.items.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					);
				})}
			</Card>
		</div>
	);
};

export default ExpenseList;
