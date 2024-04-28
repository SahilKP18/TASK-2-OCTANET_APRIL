function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            li.remove();
        };
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        
        input.value = "";
    }
}
