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
console.log(parentLi);

parentLi.forEach((li) => {
	const dropIcon = document.createElement('span');
	dropIcon.classList.add('drop-icon');

	li.insertAdjacentElement('beforeend', dropIcon);
	dropIcon.innerHTML = `
				<img src="./assets/images/Arrow-down.svg" width=24px height=24px />
				`;

	dropIcon.addEventListener('click', () => {
		const submenu = document.querySelector('.main-menu-sublist');
		submenu.classList.toggle('opened');

		if (submenu.classList.contains('opened')) {
			console.log('inJos');
			dropIcon.innerHTML = `
				<img src="./assets/images/Arrow-up.svg" width=24px height=24px />
				`;
		} else {
			dropIcon.innerHTML = `
		<img src="./assets/images/Arrow-down.svg" width=24px height=24px />
		`;
		}
	});
});
