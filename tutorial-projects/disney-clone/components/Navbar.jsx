import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';
import React from 'react';

const Navbar = ({ account }) => {
	return (
		<nav className='navbar'>
			<Link href='./'>
				<Image src={logo} alt='Disney Logo' width={90} height={50} />
			</Link>
			<div className='account-info'>
				<p>
					Welcome {account.username.charAt(0).toUpperCase() + account.username.slice(1)}!
				</p>
				<img
					className='avatar'
					src={account.avatar.url}
					alt={`${account.usrname}'s avatar`}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
