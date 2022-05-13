import React, { useState } from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';

export const getServerSideProps = async (pageContext) => {
	const url = process.env.ENDPOINT;
	const pageSlug = pageContext.query.slug;
	const graphQLClient = new GraphQLClient(url, {
		headers: {
			Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
		},
	});

	const query = gql`
		query ($pageSlug: String!) {
			video(where: { slug: $pageSlug }) {
				createdAt
				id
				title
				description
				seen
				slug
				tags
				thumbnail {
					url
				}
				mp4 {
					url
				}
			}
		}
	`;

	const variables = {
		pageSlug,
	};

	const data = await graphQLClient.request(query, variables);
	const video = data.video;

	return {
		props: {
			video,
		},
	};
};

const changeToSeen = async (slug) => {
	await fetch('api/changeToSeen', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ slug }),
	});
};

const Video = ({ video }) => {
	const [watching, setWatching] = useState(false);
	return (
		<>
			{!watching && (
				<img className='video-image' src={video.thumbnail.url} alt={video.title} />
			)}
			{!watching && (
				<div className='video-info'>
					<p>{video.tags.join(', ')}</p>
					{/* <p>
					{video.tags.map((tag) => (
						<Link key={tag} href={`/tag/${tag}`}>
							{tag}
						</Link>
					))}
				</p> */}
					<p>{video.description}</p>
					<Link href='/'>
						<p>Go back</p>
					</Link>
					<button
						className='video-overlay'
						onClick={() => {
							changeToSeen(video.slug);
							setWatching((prevState) => !prevState);
							console.log(watching);
						}}
					>
						PLAY
					</button>
				</div>
			)}
			{watching && (
				<video width='100%' controls>
					<source src={video.mp4.url} type='video/mp4' />
				</video>
			)}
			<div
				className='info-footer'
				onClick={() => {
					watching ? setWatching((prevState) => !prevState) : null;
				}}
			></div>
		</>
	);
};

export default Video;
