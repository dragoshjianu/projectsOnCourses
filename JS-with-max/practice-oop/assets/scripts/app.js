class ToolTip {}

class ProjectItem {
	constructor(id, updateProjectListsFunction) {
		this.id = id;
		this.updateProjectListsHandler = updateProjectListsFunction;
		this.connectSwitchButton();
		this.connsctMoreInfoButton();
	}

	connsctMoreInfoButton() {}

	connectSwitchButton() {
		const projectItemElement = document.getElementById(this.id);
		const switchButton = projectItemElement.querySelector(
			"button:last-of-type"
		);

		switchButton.addEventListener("click", this.updateProjectListsHandler);
	}
}

class ProjectList {
	projects = [];

	constructor(type) {
		this.type = type;
		const prjItems = document.querySelectorAll(`#${type}-projects li`);
		for (const prjItem of prjItems) {
			this.projects.push(
				new ProjectItem(prjItem.id, this.switchProject.bind(this))
			);
		}
		console.log(this.projects);
	}

	setSwitchHandlerFunction(switchHandlerFunction) {
		this.switchHandler = switchHandlerFunction;
	}

	addProject() {
		console.log(this);
	}

	switchProject(projectId) {
		//O varianta - gaseste indexul elementului si apoi inlatura elementul din array
		// const projectIndex = this.projects.findIndex((p) => p.id === projectId);
		// this.projects.splice(projectIndex, 1);

		// Varianta 2 - Filtreaza array-ul si returneaza elementele ce nu au id-ul curent
		this.switchHandler(
			this.projects.find((p) => {
				p.id === projectId;
			})
		);
		this.projects = this.projects.filter((p) => {
			p.id !== projectId;
		});
	}
}

class App {
	static init() {
		const activeProjectLists = new ProjectList("active");
		const finishedProjectLists = new ProjectList("finished");
		activeProjectLists.setSwitchHandlerFunction(
			finishedProjectLists.addProject.bind(finishedProjectLists)
		);
		finishedProjectLists.setSwitchHandlerFunction(
			activeProjectLists.addProject.bind(finishedProjectLists)
		);
	}
}

App.init();
