function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.textContent = taskInput.value;
  taskList.appendChild(li);
  taskInput.value = '';
}

