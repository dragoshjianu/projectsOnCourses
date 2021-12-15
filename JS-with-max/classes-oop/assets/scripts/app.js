divconst;

const productList = {
	products: [
		{ title: "A Pillow", imageUrl: "#", price: "19.99", description: "A soft pillow" },
		{ title: "A Carpet", imageUrl: "#", price: "89.99", description: "A carpet which you might like" },
	],
	render() {
		const renderHook = document.querySelector("#app");
		const prodList = document.createElement("ul");
		prodList.className = "product-list";
		for (const prod of this.products) {
			const prodEl = document.createElement("li");
			prodEl.className = "product-item";
			prodEl.innerHTML = `
				<div>
					<img src="${prod.imageUrl}" alt="${prod.title}"/>
					<div class="product-item__content>
						<h2></h2>
					</div>
				</div>
			`;
		}
		renderHook.append();
	},
};
