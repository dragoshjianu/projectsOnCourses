const DEFAULT_COLOR = "#4f4f4f";
const DEFAULT_MODE = "monochrome";
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentGridSize = DEFAULT_SIZE;

let defaultAlpha = 0.1;

const setColor = (newColor) => {
	currentColor = newColor;
};

const setMode = (newMode) => {
	currentMode = newMode;
};

const setSize = (newSize) => {
	currentSize = newSize;
};

const clearGrid = () => {
	grid.innerHTML = "";
};

const reloadrGrid = () => {
	clearGrid();
	createGridCells(currentGridSize);
};

const grid = document.getElementById("grid-container");
const clearBtn = document.querySelector(".clear");
const monochromeBtn = document.querySelector(".monochrome");
const rainbowBtn = document.querySelector(".rainbow");
const colorPicker = document.querySelector(".color");
const eraseBtn = document.querySelector(".erase");

colorPicker.value = currentColor;

const generateRandomRGB = () => {
	const randomR = Math.floor(Math.random() * 256);
	const randomG = Math.floor(Math.random() * 256);
	const randomB = Math.floor(Math.random() * 256);

	const randomRGB = `rgba(${randomR}, ${randomG}, ${randomB})`;
	return randomRGB;
};

function hexToRGB(hexCode) {
	let hex = hexCode.replace("#", "");

	if (hex.length === 3) {
		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgb(${r}, ${g}, ${b})`;
}

const rgbToRgba = (color, alpha) => {
	let rgbaColor = "";
	if (color.indexOf("a") == -1) {
		rgbaColor = color.replace(`rgb`, `rgba`).replace(")", `, ${alpha})`);
	}
	return rgbaColor;
};

const getRGB = (rgbaColor) => {
	let rgb = /^rgba\(((,?\s*\d+){3}).+$/;
	return rgbaColor.replace(rgb, "rgb($1)");
};

const getAlpha = (color) => {
	let alpha = parseFloat(color.split(",")[3]);
	if (isNaN(alpha)) {
		return;
	} else {
		return alpha;
	}
};

const strenghenColor = (color, alpha) => {
	let rgbaColor = ``;
	if (alpha === 1 || !alpha) {
		rgbaColor = color;
	} else {
		alpha += 0.1;
		rgbaColor = rgbToRgba(getRGB(color), alpha);
	}
	return rgbaColor;
};

const createGridCells = (size) => {
	for (let i = 0; i < size ** 2; i++) {
		gridCell = document.createElement("div");
		gridCell.classList.add("cell");
		gridCell.addEventListener("mouseenter", changeColor);
		grid.appendChild(gridCell);
	}

	grid.style.gridTemplateColumns = `repeat(${size}, auto)`;
	grid.style.gridTemplateRows = `repeat(${size}, auto)`;
};

const changeColor = (e) => {
	if (currentMode === "monochrome") {
		let gotAlpha = getAlpha(e.target.style.backgroundColor);
		if (!e.target.style.backgroundColor) {
			console.log("hovered");
			e.target.style.backgroundColor = rgbToRgba(
				hexToRGB(currentColor),
				defaultAlpha,
			);
		} else {
			e.target.style.backgroundColor = strenghenColor(
				e.target.style.backgroundColor,
				getAlpha(e.target.style.backgroundColor),
			);
		}
	}
	if (currentMode === "rainbow") {
		currentColor = generateRandomRGB();
		e.target.style.backgroundColor = currentColor;
	}

	if (currentMode === "erase") {
		e.target.style.backgroundColor = hexToRGB("#ffffff");
	}
};

const initializeBoard = () => {
	createGridCells(DEFAULT_SIZE);
	setMode(currentMode);
};

window.addEventListener("DOMContentLoaded", initializeBoard);
clearBtn.addEventListener("click", reloadrGrid);
eraseBtn.addEventListener("click", () => {
	setMode("erase");
});
monochromeBtn.addEventListener("click", () => {
	setMode("monochrome");
});
rainbowBtn.addEventListener("click", () => {
	setMode("rainbow");
});
