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
	return (
		<>
			<div className='app'>
				<div className='main-video'>
					<img src={randomVideo(videos).thumbnail.url} alt={randomVideo(videos).title} />
				</div>
				<div className='video-feedback'>
					<Section genre={'Family'} videos={filteredVideos(videos, 'family')} />
					<Section genre={'Star Wars'} videos={videos} />
					<Section genre={'Disney'} videos={videos} />
					<Section genre={'National Geographic'} videos={videos} />
					<Section genre={'Marvel'} videos={videos} />
					<Section genre={'Pixar'} videos={videos} />
					<Section genre={'Thriller'} videos={videos} />
					<Section genre={'Classic'} videos={videos} />
				</div>
			</div>
		</>
	);
};

export default Home;
