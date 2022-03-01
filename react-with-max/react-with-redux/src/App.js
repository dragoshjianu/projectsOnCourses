import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';

import { authActions } from './store/index';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch;

	const loginHandler = () => {
		dispatch(authActions.login());
	};

	const logoutHandler = () => {
		dispatch(authActions.logout());
	};

	return (
		<>
			<Header />
			<Auth />
			<Counter />
		</>
	);
}

export default App;
