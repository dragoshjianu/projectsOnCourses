import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoS from '../../../assets/images/logo-s.png';
import logoSubtitle from '../../../assets/images/logo_sub.png';

import './Sidebar.scss';

const Sidebar = () => {
	return (
		<aside className='nav-bar'>
			<Link className='logo' to='/'>
				<img src={logoS} alt='logo' />
				<img src={logoSubtitle} alt='logo' className='sub-logo' />
			</Link>
			<nav>
				<NavLink exact='true' activeClassName='active' to='/'>
					<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
				</NavLink>
				<NavLink exact='true' activeClassName='active' className='about-link' to='/about'>
					<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeClassName='active'
					className='contact-link'
					to='/contact'
				>
					<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
				</NavLink>
			</nav>
			<ul>
				<li>
					<a href='https://linkedin.com' target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
					</a>
				</li>
				<li>
					<a href='https://github.com' target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
					</a>
				</li>
				<li>
					<a href='skype:live:dragosh.jianu' target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
