class ToDoList {
    storageKey = "tasks";

    constructor() {
        this.tasks = [];
        this.loadedLocalStorage();
    }

    addTask(task) {
        this.tasks.push(task);
        this.saveToLocalStorage();
    }

    loadedLocalStorage() {
        const data = localStorage.getItem(this.storageKey);
        if (data) {
            this.tasks = JSON.parse(data);
        }
    }

    saveToLocalStorage() {
        
        localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    }

    getTasks() {
        return [...this.tasks];
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.saveToLocalStorage();
    }
}

const toDoList = new ToDoList();

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskContainer = document.getElementById("element");

function renderTasks() {
    const tasks = toDoList.getTasks();
    taskContainer.innerHTML = "";

    if (tasks.length === 0) {
        taskContainer.innerHTML = "<p>Нет задач</p>";
        return;
    }

    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task-item";
        div.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Удалить</button>
        `;
        taskContainer.appendChild(div);
    });
}

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        toDoList.addTask(taskText);
        taskInput.value = "";
        renderTasks();
    }
});

window.deleteTask = function(index) {
    toDoList.deleteTask(index);
    renderTasks();
};

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();
});