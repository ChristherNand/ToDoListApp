(function () {
    window.onload = function () {
        /* 
        Adding listener to add task button
        */
        var addTaskButton = document.querySelectorAll("#addTask")[0];
        var todoList = document.querySelectorAll("#todoList")[0];
        var newTaskInput = document.querySelectorAll("#newTask")[0];
        addTaskButton.addEventListener("click", function () {
            // Get input value
            var newTask = newTaskInput.value;
            // Append new li to ul
            addNewTask(newTask);
        });

        function addNewTask(task) {
            removeListenerToRemoveTask();
            todoList.innerHTML += "<li class='task'>" + task + "<span>x</span></li>";
            addListenersToRemoveTask();
        }

        function addListenersToRemoveTask() {
            var removeTask = document.querySelectorAll("#todoList li span");
            for (var taskButton of removeTask) {
                taskButton.addEventListener("click", function (event) {
                    todoList.removeChild(event.target.parentNode);
                });
            }
        }

        function removeListenerToRemoveTask() {
            var removeTask = document.querySelectorAll("#todoList li span");
            for (var taskButton of removeTask) {
                taskButton.removeEventListener("click", null);
            }
        }
    }
})();