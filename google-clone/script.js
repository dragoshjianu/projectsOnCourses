const serviceBtn = document.querySelector(".google__service-button");
const modal = document.querySelector(".modal");
const searchBtn = document.querySelectorAll(".google__search-button");

serviceBtn.addEventListener("click", () => {
	modal.classList.toggle("hidden");
});

searchBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		location.href = "./results.html";
	});
});
