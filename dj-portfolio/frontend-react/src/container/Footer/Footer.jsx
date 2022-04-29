import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../clinet';
import './Footer.scss';

const Footer = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setIsLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setIsLoading(true);

		const contact = {
			_type: 'contact',
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			setIsLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
			<h2 className='head-text'>Take a coffe & chat with me</h2>
			<div className='app__footer-cards'>
				<div className='app__footer-card'>
					<img src={images.email} alt='email' />
					<a href='mailto:hello@hello.com' className='p-text'>
						hello@hello.com
					</a>
				</div>
				<div className='app__footer-card'>
					<img src={images.mobile} alt='mobile' />
					<a href='tel:+4072212323' className='p-text'>
						072212323
					</a>
				</div>
				{!isFormSubmitted ? (
					<div className='app__footer-form app__flex'>
						<div className='app__flex'>
							<input
								className='p-text'
								type='text'
								placeholder='Your name'
								name='name'
								value={name}
								onChange={handleChangeInput}
							/>
						</div>
						<div className='app__flex'>
							<input
								className='p-text'
								type='email'
								placeholder='Your E-mail'
								name='email'
								value={email}
								onChange={handleChangeInput}
							/>
						</div>
						<div>
							<textarea
								className='p-text'
								placeholder='Your message'
								name='message'
								value={message}
								onChange={handleChangeInput}
							/>
						</div>
						<button type='button' className='p-text' onClick={handleSubmit}>
							{loading ? 'SENDING' : 'Send Message'}
						</button>
					</div>
				) : (
					<div>
						<h3 className='headt-text'>Thnk you for contacting us</h3>
					</div>
				)}
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(Footer, 'app__skills'), 'contact', 'app__whitebg');
