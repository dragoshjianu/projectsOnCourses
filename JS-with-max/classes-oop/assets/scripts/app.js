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

class ElementAttribute {
	constructor(name, value) {
		this.name = name;
		this.value = value;
	}
}

class Component {
	constructor(renderHookId, shouldRender = true) {
		this.hookId = renderHookId;
		if (shouldRender) {
			this.render();
		}
	}

	render() {}

	createRootElement(tag, cssClasses, attributes) {
		const rootElement = document.createElement(tag);
		if (cssClasses) {
			rootElement.className = cssClasses;
		}

		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				rootElement.setAttribute(attr.name, attr.value);
			}
		}

		document.getElementById(this.hookId).append(rootElement);
		return rootElement;
	}
}

class ShoppingCart extends Component {
	items = [];

	set cartItems(value) {
		this.items = value;
		this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
	}

	get totalAmount() {
		const sum = this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
		return sum;
	}

	constructor(renderHookId) {
		super(renderHookId, false);
		this.orderProducts = () => {
			console.log("Ordering...");
			console.table(this.items);
		};
		this.render();
	}

	addProduct(product) {
		const updatedItems = [...this.items];
		updatedItems.push(product);
		this.cartItems = updatedItems;
	}

	render() {
		const cartEl = this.createRootElement("section", "cart");
		cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
		const orderButton = cartEl.querySelector("button");
		// orderButton.addEventListener("click", () => this.orderProducts());
		orderButton.addEventListener("click", this.orderProducts);
		this.totalOutput = cartEl.querySelector("h2");
	}
}

class ProductItem extends Component {
	constructor(product, renderHookId) {
		super(renderHookId, false);
		this.product = product;
		this.render();
	}

	addToCart() {
		App.addProductToCart(this.product);
	}

	render() {
		const prodEl = this.createRootElement("li", "product-item");
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
	}
}

class ProductList extends Component {
	#products = [];
	constructor(renderHookId) {
		super(renderHookId, false);
		this.render();
		this.#fetchProducts();
	}

	#fetchProducts() {
		this.#products = [
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
		this.#renderProducts();
	}

	#renderProducts() {
		for (const prod of this.#products) {
			new ProductItem(prod, "prod-list");
		}
	}

	render() {
		const prodList = this.createRootElement("ul", "product-list", [new ElementAttribute("id", "prod-list")]);

		if (this.#products && this.#products.length > 0) {
			this.renderProducts();
		}
	}
}

class Shop {
	constructor() {
		this.render();
	}
	render() {
		this.cart = new ShoppingCart("app");
		new ProductList("app");
	}
}

class App {
	static cart;

	static init() {
		const shop = new Shop();
		this.cart = shop.cart;
	}

	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();
