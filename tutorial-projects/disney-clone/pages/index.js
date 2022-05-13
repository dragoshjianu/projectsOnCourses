import { gql, GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Section from '../components/Section';

export const getStaticProps = async () => {
	const url = process.env.ENDPOINT;

	const graphQLClient = new GraphQLClient(url, {
		headers: {
			Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
		},
	});

	const getVideosQuery = gql`
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

	const getAccountQuery = gql`
		query {
			account(where: { id: "cl2zshv8nvr2q0cuqiyvn0zv4" }) {
				username
				avatar {
					url
				}
			}
		}
	`;

	const data = await graphQLClient.request(getVideosQuery);
	const videos = data.videos;

	const accountData = await graphQLClient.request(getAccountQuery);
	const account = accountData.account;

	return {
		props: {
			videos,
			account,
		},
	};
};

const Home = ({ videos, account }) => {
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
			<Navbar account={account} />
			<div className='app'>
				<div className='main-video'>
					<img src={randomVideo(videos).thumbnail.url} alt={randomVideo(videos).title} />
				</div>
				<div className='video-feed'>
					<Link href='#disney'>
						<div className='franchise'>Disney</div>
					</Link>
					<Link href='#marvel'>
						<div className='franchise'>Marvel</div>
					</Link>
					<Link href='#star-wars'>
						<div className='franchise'>Star Wars</div>
					</Link>
					<Link href='#family'>
						<div className='franchise'>Family</div>
					</Link>
					<Link href='#classic'>
						<div className='franchise'>Classic</div>
					</Link>
					<Link href='#thriller'>
						<div className='franchise'>Thriller</div>
					</Link>
				</div>

				<Section genre={'Recommnded for you'} videos={unSeenVideos(videos)} />
				<Section
					genre={'Family'}
					videos={filteredVideos(videos, 'family')}
					id={'family'}
				/>
				<Section
					genre={'Star Wars'}
					videos={filteredVideos(videos, 'star-wars')}
					id={'star-wars'}
				/>
				<Section
					genre={'Disney'}
					videos={filteredVideos(videos, 'disney')}
					id={'disney'}
				/>
				<Section
					genre={'National Geographic'}
					videos={filteredVideos(videos, 'national-geographic')}
					id={'national-geographic'}
				/>
				<Section
					genre={'Marvel'}
					videos={filteredVideos(videos, 'marvel')}
					id={'marvel'}
				/>
				<Section genre={'Pixar'} videos={filteredVideos(videos, 'pixar')} id='pixar' />
				<Section
					genre={'Thriller'}
					videos={filteredVideos(videos, 'thriller')}
					id={'thriller'}
				/>
				<Section
					genre={'Classic'}
					videos={filteredVideos(videos, 'classic')}
					id={'classic'}
				/>
			</div>
		</>
	);
};

export default Home;
