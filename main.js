document.addEventListener("DOMContentLoaded", function() {
    /* --- Task 8: Tabbed Navigation --- */
    window.openTab = function(evt, tabName) {
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
    };

    /* --- Task 9: To-Do List --- */
    window.addTodo = function() {
        const todoInput = document.getElementById('todoInput');
        const todoList = document.getElementById('todoList');
        if (!todoInput || !todoList) return;
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
    };

    const todoInputEl = document.getElementById('todoInput');
    if (todoInputEl) {
        todoInputEl.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') { addTodo(); }
        });
    }

    /* --- Task 10: Image Slider (Automatic + Manual) --- */
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    window.moveSlide = function(direction) {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    };

    if (slides.length > 0) {
        // Automatic Slide every 3 seconds
        let slideInterval = setInterval(function() {
            moveSlide(1);
        }, 3000);

        // Pause on hover
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', function() {
                clearInterval(slideInterval);
            });
            sliderContainer.addEventListener('mouseleave', function() {
                slideInterval = setInterval(function() {
                    moveSlide(1);
                }, 3000);
            });
        }
    }

    /* --- Task 11: Toggle Switches --- */
    window.toggleMainSwitch = function() {
        const sw = document.getElementById('mainToggle');
        const emo = document.getElementById('mainEmoji');
        const txt = document.getElementById('mainStatus');
        if (!sw) return;
        
        sw.classList.toggle('off');
        
        if (sw.classList.contains('off')) {
            if (emo) emo.textContent = '☺';
            if (txt) txt.textContent = 'OFF';
        } else {
            if (emo) emo.textContent = '☹';
            if (txt) txt.textContent = 'ON';
        }
    };

    window.toggleThisSwitch = function(element) {
        element.classList.toggle('off');
        const emo = element.querySelector('.emoji');
        const label = element.parentElement.querySelector('.status-label');
        
        if (element.classList.contains('off')) {
            if (emo) emo.textContent = '☺';
            if (label) label.textContent = 'OFF';
        } else {
            if (emo) emo.textContent = '☹';
            if (label) label.textContent = 'ON';
        }
    };
});
