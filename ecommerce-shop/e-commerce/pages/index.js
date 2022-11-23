import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
	return (
		<>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
			<div className='products-heading'>
				<h2>Best Selling Products</h2>
				<p>Speakers of many variations</p>
			</div>
			<div className='products-container'>
				{products.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>

			<FooterBanner footerBanner={bannerData.length && bannerData[0]} />
		</>
	);
};

export const getServerSideProps = async () => {
	const q = '*[_type == "product"]';
	const products = await client.fetch(q);

	const q_banner = '*[_type == "banner"]';
	const bannerData = await client.fetch(q_banner);

	return {
		props: {
			products,
			bannerData,
		},
	};
};

export default Home;
