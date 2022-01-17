const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.responseType = "json"; //Merge cu xhr.response fara JSON.parse

xhr.onload = function () {
	// const listOfPosts = JSON.parse(xhr.response);
	const listOfPosts = xhr.response;
	console.log(listOfPosts);
};

xhr.send();

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
