/* --- Task 8 Script: Tabbed Navigation --- */
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

/* --- Task 9 Script: To-Do List --- */
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo() {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const span = document.createElement('span');
    span.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') { addTodo(); }
});

document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.remove();
    });
});

/* --- Task 10 Script: Image Slider --- */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

/* --- Task 11 Script: Toggle Button --- */
function toggleStatus() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const statusText = document.getElementById('statusText');
    if (toggleSwitch.checked) {
        statusText.textContent = "ON";
    } else {
        statusText.textContent = "OFF";
    }
}
