import { GraphQLClient } from 'graphql-request';

export default async ({ body }, res) => {
	new GraphQLClient(process.env.ENDPOINT, {
		Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
	});
};
