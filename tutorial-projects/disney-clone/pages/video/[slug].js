import React from 'react';
import { gql, GraphQLClient } from 'graphql-request';

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

const Video = ({ video }) => {
	console.log(video);
	return <div>VIDEO</div>;
};

export default Video;
