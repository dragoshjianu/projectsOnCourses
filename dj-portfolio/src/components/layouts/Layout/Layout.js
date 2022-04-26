import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

import './Layout.scss';

const Layout = () => {
	return (
		<section className='App'>
			<Sidebar />
			<main className='page'>
				<span className='tags top-tags'>&lt;body&gt;</span>
				<Outlet />
				<span className='tags bottom-tags'>
					&lt;/body&gt;
					<br />
					<span className='bottom-tag-html'>&lt;/html&gt;</span>
				</span>
			</main>
		</section>
	);
};

export default Layout;
