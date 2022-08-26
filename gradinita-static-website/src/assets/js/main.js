// Functions

const addFaIconToMenu = (icon, parent, location) => {
	const element = document.createElement('i');
	element.classList.add('fa-solid', `fa-${icon}`, 'expand');
	const linkItem = parent.querySelector('a');

	linkItem.insertAdjacentElement(location, element);
};

// Toggle Menu
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.main-menu');

navToggle.addEventListener('click', () => {
	primaryNav.hasAttribute('data-visible')
		? navToggle.setAttribute('aria-expanded', false)
		: navToggle.setAttribute('aria-expanded', true);
	primaryNav.toggleAttribute('data-visible');
});

// Add dropdown icon to parent menu item
const menuElements = primaryNav.querySelectorAll('.main-menu-item');

menuElements.forEach((element) => {
	const children = element.children;
	for (child of children) {
		if (child.tagName === 'UL') {
			const parentLi = child.parentElement;
			parentLi.setAttribute('data-parent', '');
			console.log(parentLi);
			addFaIconToMenu('caret-down', parentLi, 'beforeEnd');
		}
	}
});
