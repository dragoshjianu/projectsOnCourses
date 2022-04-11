import { useRouter } from 'next/router';

const SomethingImportant = () => {
	const router = useRouter();

	const newsId = router.query.newsId;

	// send a req to the backend API
	// to fetch the news item with newsId

	return <h1>The Detail Page</h1>;
};

export default SomethingImportant;
