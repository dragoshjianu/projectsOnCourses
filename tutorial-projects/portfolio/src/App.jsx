import React from 'react';
import {
	About,
	Contact,
	Experience,
	Navigation,
	Portfolio,
	Services,
	Testimonials,
} from './components/sections';
import { Header, Main, Footer } from './components/Layuout';

const App = () => {
	return (
		<div>
			<>
				<Header />
				<Main>
					<Navigation />
					<About />
					<Experience />
					<Services />
					<Portfolio />
					<Testimonials />
					<Contact />
				</Main>

				<Footer />
			</>
		</div>
	);
};

export default App;
