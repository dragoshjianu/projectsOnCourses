import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Max', text: 'Learning React is Fun' },
	{ id: 'q2', author: 'Dragosh', text: 'Learning React is Great' },
	{ id: 'q3', author: 'Maximillian', text: 'Learning React is Wow' },
];

const AllQuotes = () => {
	return (
		<>
			<QuoteList quotes={DUMMY_QUOTES} />
		</>
	);
};

export default AllQuotes;
