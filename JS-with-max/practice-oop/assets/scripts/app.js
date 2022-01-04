class DOMHelper {
	static clearEventListeners(element) {
		const clonedElement = element.cloneNode(true);
		element.replaceWith(clonedElement);
		return clonedElement;
	}
	static moveElement(elementId, newDestinationSelector) {
		const element = document.getElementById(elementId);
		const destinationEleent = document.querySelector(newDestinationSelector);

		destinationEleent.append(element);
	}
}

class Component {
	constructor(hostElementId, insertBefore = false) {
		if (hostElementId) {
			this.hostElement = document.getElementById(hostElementId);
		} else {
			this.hostElement = document.body;
		}
		this.insertBefore = insertBefore;
	}
	detach = () => {
		if (this.element) {
			this.element.remove();
		}
		// this.element.parentElement.removeChild(this.element);
	};

	attach() {
		this.hostElement.insertAdjacentElement(this.insertBefore ? "afterbegin" : "beforeend", this.element);
	}
}

class Tooltip extends Component {
	constructor(closeNotifierFuction) {
		super();
		this.closeNotifier = closeNotifierFuction;
		this.create();
	}

	closeTooltip = () => {
		this.detach();
		this.closeNotifier();
	};

	create() {
		const toolTipElement = document.createElement("div");
		toolTipElement.className = "card";
		toolTipElement.textContent = "Toolip DUMMY Text";
		toolTipElement.addEventListener("click", this.closeTooltip);
		this.element = toolTipElement;
	}
}

class ProjectItem {
	hasActiveTooltip = false;

	constructor(id, updateProjectListsFunction, type) {
		this.id = id;
		this.updateProjectListsHandler = updateProjectListsFunction;
		this.connectSwitchButton(type);
		this.connetMoreInfoButton();
	}

	connectSwitchButton(type) {
		const projectItemElement = document.getElementById(this.id);
		let switchBtn = projectItemElement.querySelector("button:last-of-type");
		switchBtn = DOMHelper.clearEventListeners(switchBtn);
		switchBtn.textContent = type === "active" ? "Finish" : "Activate";
		switchBtn.addEventListener("click", this.updateProjectListsHandler.bind(null, this.id));
	}

	showMoreInfoHandler() {
		if (this.hasActiveTooltip) {
			return;
		}
		const projectElement = document.getElementById(this.id);
		const tooltip = new Tooltip(() => {
			this.hasActiveTooltip = false;
		});
		tooltip.attach();
		this.hasActiveTooltip = true;
	}

	connetMoreInfoButton() {
		const projectItemElement = document.getElementById(this.id);
		let moreInfoBtn = projectItemElement.querySelector("button:first-of-type");
		moreInfoBtn.addEventListener("click", this.showMoreInfoHandler);
	}

	update(updateProjectListsFn, type) {
		this.updateProjectListsHandler = updateProjectListsFn;
		this.connectSwitchButton(type);
	}
}

class ProjectList {
	projects = [];

	constructor(type) {
		this.type = type;
		//Extrage din DOM sectiunile cu ID in functie de tipul proiectelor
		const prjItems = document.querySelectorAll(`#${type}-projects li`);
		for (const prjItem of prjItems) {
			this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), type));
		}
		console.log(this.projects);
	}

	setSwitchHandlerFunction(switchHandlerFunction) {
		this.switchHandler = switchHandlerFunction;
	}

	addProject(project) {
		this.projects.push(project);
		DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
		project.update(this.switchProject.bind(this), this.type);
	}

	switchProject(projectId) {
		// gaseste index-ul elementului dupa ID si apoi scoate-l din array
		// const projectIndex = this.projects.findIndex((project) => project.id === projectId);
		// this.projects.splice(projectIndex, 1);

		//cauta elementul in functie de ID
		this.switchHandler(this.projects.find((project) => project.id === projectId));
		//filtreaza eleentele ce nu au ID-ul specificat
		this.projects = this.projects.filter((project) => project.id !== projectId);
	}
}

class App {
	static init() {
		const activeProjectsList = new ProjectList("active");
		const finishedProjectsList = new ProjectList("finished");

		activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
		finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
	}
}

App.init();
