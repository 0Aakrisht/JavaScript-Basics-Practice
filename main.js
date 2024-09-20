// Function to add a task to the list
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("task-list");

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = taskValue;

  // Add a complete button
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  // Add a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => listItem.remove();

  // Append delete button to list item
  listItem.appendChild(deleteBtn);

  // Append list item to task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";
}
