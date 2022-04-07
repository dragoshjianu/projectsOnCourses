import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'Meetup Forst Item',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
		address: 'Some Address 5, 12345 City',
		description: 'This is a first Meetup',
	},
	{
		id: 'm2',
		title: 'Meetup Second Item',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
		address: 'Some Address 5, 12345 City',
		description: 'This is a second Meetup',
	},
];
const HomePage = (props) => {
	return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from API
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	//fetch data from an API or database
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 10,
	};
}

export default HomePage;
