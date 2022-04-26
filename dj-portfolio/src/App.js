// import REACT related elements
import { Routes, Route } from 'react-router-dom';

// import componenets
import Layout from './components/layouts/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';

// import CSS
import './App.scss';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
