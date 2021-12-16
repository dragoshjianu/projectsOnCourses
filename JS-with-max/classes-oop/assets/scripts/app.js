class Product {
	// title = "DEFAULT";
	// imageUrl;
	// description;
	// price;

	constructor(title, image, description, price) {
		this.title = title;
		this.imageUrl = image;
		this.description = description;
		this.price = price;
	}
}

class ProductItem {
	constructor(product) {
		this.product = product;
	}

	addToCart() {
		console.log("Product added to chart");
		console.log(this.product);
	}

	render() {
		const prodEl = document.createElement("li");
		prodEl.className = "product-item";
		prodEl.innerHTML = `
			<div>
				<img src="${this.product.imageUrl}" alt="${this.product.title}" />
				<div class="product-item__content">
					<h2>${this.product.title}</h2>
					<h3>$${this.product.price}</h3>
					<p>${this.product.description}</p>
					<button>Add to Cart</button>
				</div>
			</div>
		`;
		const addCartButton = prodEl.querySelector("button");
		addCartButton.addEventListener("click", this.addToCart.bind(this));
		return prodEl;
	}
}

class ProductList {
	products = [
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
	];

	constructor() {}

	render() {
		const renderHook = document.getElementById("app");
		const prodList = document.createElement("ul");
		prodList.className = "product-list";
		for (const prod of this.products) {
			const productItem = new ProductItem(prod);
			const prodEl = productItem.render();
			prodList.append(prodEl);
		}
		renderHook.append(prodList);
	}
}

const productList = new ProductList();
productList.render();
