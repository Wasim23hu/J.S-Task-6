/* --- Task 8: Tabbed Navigation --- */
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

/* --- Task 9: To-Do List --- */
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const span = document.createElement('span');
    span.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
}

document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') { addTodo(); }
});

/* --- Task 10: Image Slider --- */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

/* --- Task 11: Toggle Switches --- */
function toggleMainSwitch() {
    const sw = document.getElementById('mainToggle');
    const emo = document.getElementById('mainEmoji');
    const txt = document.getElementById('mainStatus');
    
    sw.classList.toggle('off');
    
    if (sw.classList.contains('off')) {
        emo.textContent = '☺';
        txt.textContent = 'OFF';
    } else {
        emo.textContent = '☹';
        txt.textContent = 'ON';
    }
}

function toggleThisSwitch(element) {
    element.classList.toggle('off');
    const emo = element.querySelector('.emoji');
    const label = element.parentElement.querySelector('.status-label');
    
    if (element.classList.contains('off')) {
        emo.textContent = '☺';
        label.textContent = 'OFF';
    } else {
        emo.textContent = '☹';
        label.textContent = 'ON';
    }
}
