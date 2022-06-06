const menuElements = document.querySelectorAll('.main-menu-item');

menuElements.forEach((element) => {
	const children = element.children;
	for (child of children) {
		if (child.tagName === 'UL') {
			child.parentElement.classList.add('has-childern');
		}
	}
});

const parentLi = document.querySelectorAll('.has-childern');

const addFaIconToMenu = (icon, parent, location) => {
	const element = document.createElement('i');
	element.classList.add('fa-solid', `fa-${icon}`, 'expand');
	const linkItem = parent.querySelector('a');

	linkItem.insertAdjacentElement(location, element);
};

parentLi.forEach((li) => {
	addFaIconToMenu('plus', li, 'afterEnd');
	li.addEventListener('click', () => {
		const submenu = document.querySelector('.main-menu-sublist');
		submenu.classList.toggle('opened');
	});
});

const menuTriggerBtn = document.getElementById('menuTrigger');
const menuToggleCheck = document.getElementById('menuToggle');
const mainMenuContainer = document.getElementById('mainMenu');

menuTriggerBtn.addEventListener('click', (e) => {
	menuToggleCheck.checked = !menuToggleCheck.checked;
});
