function updateCounter() {
  const count = document.getElementById('taskList').children.length;
  document.getElementById('counter').textContent = `Total Tasks: ${count}`;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.textContent = taskInput.value;
  taskList.appendChild(li);
  taskInput.value = '';
  updateCounter();
}

	Edit index.html (add a counter)
<h2 id="counter">Total Tasks: 0</h2>