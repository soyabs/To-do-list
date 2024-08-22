document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('new-task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.getElementById('search-input').addEventListener('input', filterTasks);

function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">✖</button>
        `;

        taskList.appendChild(taskItem);

        // Add event listener for delete button
        taskItem.querySelector('.delete-btn').addEventListener('click', function() {
            taskItem.remove();
        });

        // Clear the input
        taskInput.value = '';
    }
}

function filterTasks() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const tasks = document.querySelectorAll('#task-list li');

    tasks.forEach(function(task) {
        const taskText = task.querySelector('.task-text').textContent.toLowerCase();
        if (taskText.includes(searchQuery)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

