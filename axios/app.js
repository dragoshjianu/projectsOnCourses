// Axios Basic funtionality
// axios
// .get("https://swapi.dev/api/planetsa")
// .then((result) => {
// console.log(result.data);
// })
// .catch((err) => {
// console.log("In catch callback");
// console.log(err);
// });

// Axios Chain Requests
const fetchNextPlanets = (url = "https://swapi.dev/api/planets") => {
	return axios.get(url);
};
const showPlanets = ({ data }) => {
	console.log(data);
	data.results.forEach((result) => {
		console.log(result.name);
	});
	return Promise.resolve(data.next);
};

const multiplyShowPlanets = ({ data }, times) => {
	if (data.next) {
		for (let i = 0; i < times; i++) {
			showPlanets(data);
		}
	}
};

fetchNextPlanets()
	.then(showPlanets)
	.then(fetchNextPlanets)
	.then(showPlanets)
	.then(fetchNextPlanets)
	.then(showPlanets)
	.catch((err) => {
		console.log("ERROR!!", err);
	});
