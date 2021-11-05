// import axios from "axios";
const toggleBtn = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

toggleBtn.addEventListener("click", () => {
	const visible = nav.getAttribute("data-visible");
	if (visible === "false") {
		nav.setAttribute("data-visible", true);
		toggleBtn.setAttribute("aria-expanded", true);
	}
	if (visible === "true") {
		nav.setAttribute("data-visible", false);
		toggleBtn.setAttribute("aria-expanded", false);
	}

	console.log(toggleBtn.getAttribute("aria-expanded"));
});

const renderMenu = (data) => {
	const keysArr = Object.keys(data);

	const ul = document.createElement("ul");
	ul.className = "primary-navigation underline-indicators flex";
	const homeElement = `
      <li>
        <a href="#" class="ff-sans-cond uppercase text-white letter-spacing-2">
          <span aria-hidden="true">00</span>home
        </a>
      </li>
  `;
	ul.insertAdjacentHTML("beforeEnd", homeElement);

	keysArr.forEach((menuItem, index) => {
		const insertedElement = `
		  <li>
		    <a href="#" class="ff-sans-cond uppercase text-white letter-spacing-2">
          <span aria-hidden="true">0${index + 1}</span>${menuItem}
		    </a>
		  </li>
		`;
		ul.insertAdjacentHTML("beforeEnd", insertedElement);
	});
	const navigation = document.getElementById("navigation");
	navigation.appendChild(ul);
};

const activePageHandler = () => {
	let activePage = "";

	const menuItems = document.querySelectorAll(".primary-navigation li");
	const menuLinks = document.querySelectorAll(".primary-navigation a");
	console.log(menuLinks);
	menuLinks.forEach((element) => {
		element.addEventListener("click", () => {
			const elemText = element.textContent.trim().slice(2);
			activePage = elemText;

			for (let menuItem of menuItems) {
				menuItem.className = "";
			}

			element.parentElement.classList.add("active");
			console.log(menuItems);
		});
	});

	return activePage;
};

const renderContent = (data) => {
	console.log(data);
};

fetch("./data.json")
	.then((res) => res.json())
	.then((data) => {
		renderMenu(data);
		renderContent(data);
		const activePage = activePageHandler();
		console.log(activePage, "Activa");
	})
	.catch((err) => {
		console.log("ERROR!", err);
	});
