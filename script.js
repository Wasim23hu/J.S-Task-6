// Tabs
function openTab(evt, name) {
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(name).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

// Todo
function addTodo() {
    let inp = document.getElementById('todoInput');
    if(inp.value === "") return;
    let li = document.createElement('li');
    li.innerHTML = `${inp.value} <button onclick="this.parentElement.remove()">Delete</button>`;
    document.getElementById('todoList').appendChild(li);
    inp.value = "";
}

// Slider
let idx = 0;
function move(dir) {
    let imgs = document.querySelectorAll('.slider img');
    imgs[idx].classList.remove('active');
    idx = (idx + dir + imgs.length) % imgs.length;
    imgs[idx].classList.add('active');
}

// Toggle
function toggleEmoji() {
    let sw = document.getElementById('toggleSwitch');
    let emo = document.getElementById('emoji');
    let txt = document.getElementById('statusText');
    sw.classList.toggle('off');
    if(sw.classList.contains('off')) {
        emo.textContent = '☺'; txt.textContent = 'System: OFF';
    } else {
        emo.textContent = '☹'; txt.textContent = 'System: ON';
    }
}
