class Product {
	title = "DEFAULT";
	imageUrl;
	description;
	price;

	constructor(title, image, description, price) {
		this.title = title;
		this.imageUrl = image;
		this.description = description;
		this.price = price;
	}
}

const productList = {
	products: [
		new Product(
			"A Pillow",
			"https://st.hzcdn.com/simgs/89912b1602ab900a_3-9667/contemporary-decorative-pillows.jpg",
			"A soft pillow",
			29.99
		),

		{
			title: "A Carpet",
			imageUrl: "https://st.hzcdn.com/simgs/6a5162c80b1ee5e0_3-0605/contemporary-area-rugs.jpg",
			price: 89.99,
			description: "A carpet which you might like",
		},
	],
	render() {
		const renderHook = document.getElementById("app");
		const prodList = document.createElement("ul");
		prodList.className = "product-list";
		for (const prod of this.products) {
			const prodEl = document.createElement("li");
			prodEl.className = "product-item";
			prodEl.innerHTML = `
				<div>
					<img src="${prod.imageUrl}" alt="${prod.title}" />
					<div class="product-item__content">
						<h2>${prod.title}</h2>
						<h3>$${prod.price}</h3>
						<p>${prod.description}</p>
						<button>Add to Cart</button>
					</div>
				</div>
			`;
			prodList.append(prodEl);
		}
		renderHook.append(prodList);
	},
};

productList.render();
