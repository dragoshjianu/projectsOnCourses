// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	return response.json();
};

const printPlanets = (data) => {
	console.log("Loaded 10 more planets");
	data.results.forEach((planet) => {
		console.log(planet.name);
	});
	return Promise.resolve(data.next);
};

const fetchNetxPlanets = (url = "https://swapi.dev/api/planets/") => {
	return fetch(url);
};

fetchNetxPlanets()
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNetxPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNetxPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNetxPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.catch((err) => {
		console.log("Something went whront with fetch");
		console.log(err);
	});
