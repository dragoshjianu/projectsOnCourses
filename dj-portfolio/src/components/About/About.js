import {
	faAngular,
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

import './About.scss';

const About = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className='container about-page'>
			<div className='text-zone'>
				<h1>
					<AnimatedLetters
						letterClass={letterClass}
						strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
						idx={15}
					/>
				</h1>
				<p>
					lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet,
					consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip lorem
				</p>
				<p>
					lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet,
					consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip lorem
				</p>
				<p>
					lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet,
					consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip lorem
				</p>
			</div>
			<div className='stage-cube-cont'>
				<div className='cubespinner'>
					<div className='face1'>
						<FontAwesomeIcon icon={faAngular} color='#DD0031' />
					</div>
					<div className='face2'>
						<FontAwesomeIcon icon={faHtml5} color='#f06529' />{' '}
					</div>
					<div className='face3'>
						<FontAwesomeIcon icon={faCss3} color='#28a4d9' />{' '}
					</div>
					<div className='face4'>
						<FontAwesomeIcon icon={faReact} color='#5ed4f4' />{' '}
					</div>
					<div className='face5'>
						<FontAwesomeIcon icon={faJsSquare} color='#efd81d' />{' '}
					</div>
					<div className='face6'>
						<FontAwesomeIcon icon={faGitAlt} color='#ec4e28' />{' '}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
