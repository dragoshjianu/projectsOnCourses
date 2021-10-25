// CREATE PROMOSE
// const willGetYouADog = new Promise((resolve, reject) => {
// 	const rand = Math.random();
// 	if (rand < 0.5) {
// 		console.log(rand);
// 		resolve();
// 	} else {
// 		console.log(rand);
// 		reject();
// 	}
// });
// willGetYouADog
// 	.then(() => {
// 		console.log("Promise resolved!");
// 	})
// 	.catch(() => {
// 		console.log("Muie Steaua");
// 	});

// fUNCTION RETURNS A PROMISE
// const makePromise = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rand = Math.random();
// 			if (rand < 0.5) {
// 				console.log(rand);
// 				resolve();
// 			} else {
// 				console.log(rand);
// 				reject();
// 			}
// 		}, 2000);
// 	});
// };
// makePromise()
// 	.then(() => {
// 		console.log("Promise resolved!");
// 	})
// 	.catch(() => {
// 		console.log("Muie Steaua");
// 	});

// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const pages = {
// 				"/users": [
// 					{ id: 1, username: "Bilbo" },
// 					{ id: 2, username: "Esmeralda" },
// 				],
// 				"/about": "this is the about page",
// 			};
// 			const data = pages[url];
// 			if (data) {
// 				resolve({ status: 200, data });
// 			} else {
// 				reject({ status: 404 });
// 			}
// 		}, 1000);
// 	});
// };

// fakeRequest("/users")
// 	.then((res) => {
// 		console.log(`Staus code: ${res.status}`);
// 		console.log(`Data ${res.data}`);
// 		console.log("WORKED");
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log("FAILED");
// 	});
// fakeRequest("/stelist")
// 	.then((res) => {
// 		console.log(`Staus code: ${res.status}`);
// 		console.log(`Data ${res.data}`);
// 		console.log("WORKED");
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log("FAILED");
// 	});
