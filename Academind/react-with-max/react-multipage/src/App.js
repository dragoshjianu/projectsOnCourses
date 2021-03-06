import React from 'react';

import { Route } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Route path='/welcome'>
					<Welcome />
				</Route>
				<Route path='/products'>
					<Products />
				</Route>
				<Route path='/product-detail'></Route>
			</main>
		</div>
	);
}

export default App;
