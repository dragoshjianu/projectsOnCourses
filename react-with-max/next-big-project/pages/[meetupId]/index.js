import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
	return (
		<MeetupDetail
			image='https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG'
			title='The First Meetup'
			address='Some Street 5, Some City'
			description='This is a first meetup'
		/>
	);
};

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;
	console.log(meetupId);

	return {
		props: {
			meetupData: {
				image: '',
				id: meetupId,
				title: '',
				address: '',
				description: '',
			},
		},
	};
}

export default MeetupDetails;
