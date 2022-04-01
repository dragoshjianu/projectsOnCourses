import { useRouter } from 'next/router';

const SomethingImportant = () => {
	const router = useRouter();

	console.log(router.query.newsId);

	return <h1>The Detail Page</h1>;
};

export default SomethingImportant;
