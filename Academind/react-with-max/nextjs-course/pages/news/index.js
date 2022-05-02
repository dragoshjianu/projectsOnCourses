//domain.com/news
import Link from 'next/link';

const NewsPage = () => {
	return (
		<>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href='/news/nextjs-great-framework'>NextJS is a Great Framework</Link>
				</li>
				<li>React is a Great Library</li>
			</ul>
		</>
	);
};

export default NewsPage;
