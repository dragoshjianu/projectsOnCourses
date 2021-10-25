// async function getPlanets() {
// 	const res = await axios.get("https://swapi.dev/api/pflanets");
// 	console.log(res.data);
// }

// getPlanets().catch((err) => {
// 	console.log("in Catch");
// 	console.log(err);
// });

// async function getPlanets() {
// 	try {
// 		const res = await axios.get("https://swapi.dev/api/planets");
// 		console.log(res.data);
// 	} catch (e) {
// 		console.log("in Catch! ", e);
// 	}
// }

// getPlanets();

// Multiple Awaits
// const moveX = (element, amount, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const bodyBoundry = document.body.clientWidth;
// 			const elRight = element.getBoundingClientRect().right;
// 			const currLeft = element.getBoundingClientRect().left;

// 			if (elRight + amount > bodyBoundry) {
// 				reject({ bodyBoundry, elRight, amount });
// 			} else {
// 				element.style.transform = `translateX(${currLeft + amount}px)`;
// 				resolve();
// 			}
// 		}, delay);
// 	});
// };

// const btn = document.querySelector("button");

// async function animateBtn(el, amt) {
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// }

// animateBtn(btn, 100).catch((err) => {
// 	console.log("All done!!");
// 	animateBtn(btn, -100);
// });

// PARALLEL & SEQUENTIAL REQUESTS
// //Squential req
// async function get3Pokemon() {
// 	const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
// 	const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
// 	const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
// 	console.log(poke1.data);
// 	console.log(poke2.data);
// 	console.log(poke3.data);
// }

//Parallel req
async function get3Pokemon() {
	const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
	const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
	const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
	const results = await Promise.all([prom1, prom2, prom3]);
	printPokemonNames(results);
	console.log(results);
}

function printPokemonNames(results) {
	results.forEach((pokemon) => {
		console.log(pokemon.data.name);
	});
}

get3Pokemon();

// function changeBodyColor(color, delay) {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = color;
// 			res();
// 		}, delay);
// 	});
// }

//Sequence
// async function lightShow() {
// 	await changeBodyColor("teal", 1000);
// 	await changeBodyColor("pink", 1000);
// 	await changeBodyColor("indigo", 1000);
// 	await changeBodyColor("violet", 1000);
// }

// //Parallel
// async function lightShow() {
// 	const p1 = changeBodyColor("teal", 1000);
// 	const p2 = changeBodyColor("pink", 1000);
// 	const p3 = changeBodyColor("indigo", 1000);
// 	const p4 = changeBodyColor("violet", 1000);

// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// }

// lightShow();
