// Query Selectords
const toggleSidebarBtn = document.querySelector(".toggle-sidebar");

// Global Variables
let sidebarOpen = false;

// Functions
const initializeApp = () => {
	sidebarOpen = false;
};

// Event Listeners
toggleSidebarBtn.addEventListener("click", () => {
	sidebarOpen = !sidebarOpen;
	toggleSidebarBtn.classList.toggle("active");
});
