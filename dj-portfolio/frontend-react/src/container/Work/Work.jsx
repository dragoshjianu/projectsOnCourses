import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../clinet';
import './Work.scss';

const Work = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const handleWorkfilter = (item) => {};
	return (
		<>
			<h2 className='head-text'>
				My Creative <span>portfolio</span>
			</h2>
			<div className='app__work-filter'>
				{['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkfilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? 'item-active' : ''
						}`}
					>
						{item}
					</div>
				))}
			</div>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, displayChildren: 0.5 }}
				className='app__work-portfolio'
			></motion.div>
		</>
	);
};

export default AppWrap(Work, 'work');
