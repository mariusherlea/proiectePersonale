class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectSwitchButton = this.connectSwitchButton();
    this.connectMoreInfoButton = this.connectMoreInfoButton();
  }
  connectMoreInfoButton() {}
  connectSwitchButton() {
    const ProjectItemElement = document.getElementById(this.id);
    const switchBtn = ProjectItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click");
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }
  addProject() {}
  switchProject(projectId) {
    // const ProjectIndex = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(ProjectIndex, 1);
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const ActiveProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
  }
}
App.init();
