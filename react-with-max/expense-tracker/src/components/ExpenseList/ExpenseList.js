import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

import './ExpenseList.css';

const ExpenseList = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022');

	const filterChangeHandler = (selectedYear) => {
		console.log('from List');
		setFilteredYear(selectedYear);
	};

	const filteredData = props.items.filter(
		(year) => year.date.getFullYear().toString() === filteredYear
	);

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onFilterYearData={filterChangeHandler} />
				{filteredData.lenght === 0 ? (
					<p>No expensese found</p>
				) : (
					filteredData.map((expense) => {
						return (
							<ExpenseItem
								key={expense.id}
								title={expense.title}
								amount={expense.amount}
								date={expense.date}
							/>
						);
					})
				)}
			</Card>
		</div>
	);
};

export default ExpenseList;
