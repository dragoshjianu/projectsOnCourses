import React from 'react';

const Card = ({ thumbnail, video }) => {
	return <img className='card' src={thumbnail.url} alt={video.title} />;
};

export default Card;
