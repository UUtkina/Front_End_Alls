const task = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskListUl = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);
taskListUl.addEventListener("click", doneTask);
taskListUl.addEventListener("click", deleteTask);

taskListUl.addEventListener("click", (e) => {
    console.log(e);
});


function addTask() {
    const taskName = task.value.trim();
    if (taskName) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskName}</span>
         <button class="done-button">Done</button> 
        <button class="delete-button">Delete</button>`;
        taskListUl.appendChild(li);
    }
    task.value = "";
}

function doneTask(e) {
    if (e.target.classList.contains("done-button")) {
        e.target.parentElement.querySelector('span').classList.toggle("done");
    }
}
const style = document.createElement("style");
style.innerHTML = `
    .done {
        text-decoration: line-through;
    }
`;
document.head.appendChild(style);
/*Свойство target возвращает элемент , в котором произошло событие .
Свойство target доступно только для чтения.
Свойство target возвращает элемент, в котором произошло событие, 
в отличие от currentTarget свойства, которое возвращает элемент, 
чей прослушиватель событий инициировал это событие.
*/
function deleteTask(e) {
    if (e.target.classList.contains("delete-button")) {
        e.target.parentElement.remove();
    }
}
