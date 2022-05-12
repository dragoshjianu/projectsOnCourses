import { gql, GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import Section from '../components/Section';

export const getStaticProps = async () => {
	const url = process.env.ENDPOINT;

	const graphQLClient = new GraphQLClient(url, {
		headers: {
			Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
		},
	});

	const query = gql`
		query {
			videos {
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

	const data = await graphQLClient.request(query);
	const videos = data.videos;

	return {
		props: {
			videos,
		},
	};
};

const Home = ({ videos }) => {
	const randomVideo = (videos) => {
		return videos[Math.floor(Math.random() * videos.length)];
	};

	const filteredVideos = (video, genre) => {
		return videos.filter((video) => video.tags.includes(genre));
	};

	const unSeenVideos = (videos) => {
		return videos.filter((video) => video.seen == false || video.seen == null);
	};

	return (
		<>
			<div className='app'>
				<div className='main-video'>
					<img src={randomVideo(videos).thumbnail.url} alt={randomVideo(videos).title} />
				</div>
				<div className='video-feedback'>
					<Section genre={'Recommnded for you'} videos={unSeenVideos(videos)} />
					<Section genre={'Family'} videos={filteredVideos(videos, 'family')} />
					<Section genre={'Star Wars'} videos={filteredVideos(videos, 'star-wars')} />
					<Section genre={'Disney'} videos={filteredVideos(videos, 'disney')} />
					<Section
						genre={'National Geographic'}
						videos={filteredVideos(videos, 'national-geographic')}
					/>
					<Section genre={'Marvel'} videos={filteredVideos(videos, 'marvel')} />
					<Section genre={'Pixar'} videos={filteredVideos(videos, 'pixar')} />
					<Section genre={'Thriller'} videos={filteredVideos(videos, 'thriller')} />
					<Section genre={'Classic'} videos={filteredVideos(videos, 'classic')} />
				</div>
			</div>
		</>
	);
};

export default Home;
