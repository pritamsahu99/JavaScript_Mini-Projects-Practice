var selectedTasks = [];
document.getElementById("addTask").addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        taskInput.value = "";
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        var taskList = document.getElementById("taskList");
        taskList.style.display = "block";
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(taskText));
        document.getElementById("taskList").appendChild(listItem);

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                selectedTasks.push(listItem);
            } else {
                const index = selectedTasks.indexOf(listItem);
                if (index !== -1) {
                    selectedTasks.splice(index, 1);
                }
            }
        });
    }
});

document.getElementById("deleteTask").addEventListener("click", function () {
    for (const selectedTask of selectedTasks) {
        selectedTask.remove();
    }
    selectedTasks = [];

    const taskList = document.getElementById("taskList");
    if (taskList.children.length === 0) {
        taskList.style.display = "none";
    }
});
