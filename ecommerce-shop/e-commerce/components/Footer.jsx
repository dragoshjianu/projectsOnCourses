import React from 'react';

import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
	return (
		<div className='footer-container'>
			<p>2022 JSM Headphones. All Rights Reserved</p>
			<p>
				<AiFillInstagram />
				<AiOutlineTwitter />
			</p>
		</div>
	);
};

export default Footer;
