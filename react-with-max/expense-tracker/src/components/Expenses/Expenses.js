import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesList/ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart/ExpensesChart';

import './Expenses.css';

const ExpenseList = (props) => {
	const [filteredYear, setFilteredYear] = useState('all');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredData = props.items.filter(
		(year) => year.date.getFullYear().toString() === filteredYear
	);

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onFilterYearData={filterChangeHandler} />
				<ExpensesChart expenses={filteredYear === 'all' ? props.items : filteredData} />
				<ExpensesList items={filteredYear === 'all' ? props.items : filteredData} />
			</Card>
		</div>
	);
};

export default ExpenseList;
