// import REACT related elements
import { Routes, Route } from 'react-router-dom';

// import componenets
import Layout from './components/layouts/Layout/Layout';

// import CSS
import './App.scss';
import Home from './components/layouts/Home/Home';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
