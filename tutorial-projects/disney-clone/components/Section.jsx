import React from 'react';

import Card from './Card';

const Section = (props) => {
	return (
		<section className='section'>
			<h3>{props.genre}</h3>
			<div className='video-feed'>
				{props.videos.map((video) => (
					<a key={video.id} href={`/video/${video.slug}`}>
						<Card thumbnail={video.thumbnail} video={video} />
					</a>
				))}
			</div>
		</section>
	);
};

export default Section;
