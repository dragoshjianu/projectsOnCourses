import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';
import './App.css';

function App() {
	return (
		<Routes>
			<Route element={<AllPosts />} path='/' exact />
			<Route element={<SinglePost />} path='/:slug' />
		</Routes>
	);
}

export default App;
