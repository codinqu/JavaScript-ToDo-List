
function addTask() {
    
    // creating variables for my ID's that will be used 
    let taskInput = document.getElementById('newTask');

    let taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please input a task!');
        return;
    }

    let newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
        // using .textContent as a way to access or manipulate the text within the html 

        // adding a delete button to each task
    let deleteBtn = document.createElement('button');
        // .createElement is creating a new button element 
    deleteBtn.textContent = 'Delete Task';
    deleteBtn.onclick = function() {
        taskList.removeChild(newTask);
    };  // .removeChild is removing the specified child element from it's parent
    
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
        // .appendChild is adding a new child element to an already created element in the DOM

    taskInput.value = '';
        // clearing the input field/value
}