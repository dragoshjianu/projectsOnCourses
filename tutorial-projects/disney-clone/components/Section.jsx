import React from 'react';

import Card from './Card';

const Section = (props) => {
	return (
		<section className='section' id={props.id}>
			<h3>{props.genre}</h3>
			{props.videos.map((video) => (
				<a key={video.id} href={`/video/${video.slug}`}>
					<Card thumbnail={video.thumbnail} video={video} />
				</a>
			))}
		</section>
	);
};

export default Section;
