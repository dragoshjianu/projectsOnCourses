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

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundry = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;

			if (elRight + amount > bodyBoundry) {
				reject({ bodyBoundry, elRight, amount });
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const btn = document.querySelector("button");

async function animateBtn(el) {
	await moveX(el, 100, 1000);
	moveX(el, 100, 1000);
}

animateBtn(btn);
