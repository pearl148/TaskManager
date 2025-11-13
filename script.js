function updateCounter() {
  const count = document.getElementById('taskList').children.length;
  document.getElementById('counter').textContent = `Total Tasks: ${count}`;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.textContent = taskInput.value;
  
  // Add delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = "❌";
  delBtn.onclick = () => li.remove();
  li.appendChild(delBtn);
  
  taskList.appendChild(li);
  taskInput.value = '';
  updateCounter();
}
