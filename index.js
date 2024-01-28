window.onload = function () {
  loadTasks();
};

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  savedTasks.forEach(function (taskText) {
    createTaskElement(taskText);
  });
}

function createTaskElement(taskText) {
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.className =
    "collection-item task-item animate__animated animate__fadeIn"; // Apply Animate.css classes

  newTask.innerText = taskText;

  const removeButton = document.createElement("button");
  removeButton.className = "delete-icon btn btn-small red darken-2";
  removeButton.innerHTML = "&#x1F5D1;"; 
  removeButton.style.cursor = "pointer";
  removeButton.onclick = function () {
    removeTask(taskText);
  };

  newTask.appendChild(removeButton);
  taskList.appendChild(newTask);
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const newTaskText = taskInput.value.trim();

  if (newTaskText !== "") {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(newTaskText);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));

    createTaskElement(newTaskText); // Use the function to create a new task element
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function removeTask(taskText) {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = savedTasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  loadTasks();
}
