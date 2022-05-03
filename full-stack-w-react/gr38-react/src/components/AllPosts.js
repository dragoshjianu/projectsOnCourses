import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import sanityClient from '../clinet';

const AllPosts = () => {
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
         title,
         slug, 
         mainImage {
            asset->{
               _id,
               url
            }
         }
      }`
			)
			.then((data) => setAllPosts(data))
			.catch(console.error);
	}, []);

	return (
		<div>
			<h2>Blog Posts!</h2>
			<h3>Welcome to my blog posts</h3>
			<div>
				{allPosts &&
					allPosts.map((post, index) => (
						<Link to={`/${post.slug.current}`} key={post.slug.current}>
							<span key={index}>
								<img src={post.mainImage.asset.url} alt='Main hero for blog post' />
							</span>
							<h2>{post.title}</h2>
						</Link>
					))}
			</div>
		</div>
	);
};

export default AllPosts;
