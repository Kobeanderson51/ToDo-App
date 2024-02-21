//side-list
const leftinput = document.getElementById('left-input');
const ulLeft = document.getElementById('side-ul');
const listitems= document.getElementById('list-items');

document.getElementById('left-list').addEventListener('click', getleftinput);

function getleftinput() {
let leftinputText = leftinput.value;
let leftli = document.createElement('li');
leftli.innerHTML += `<h1 class="hover:bg-gray-400 p-2 flex justify-center items-center">${leftinputText}<button class="p-2" onclick="remove(event)"id="deletebtn">🗑️</button></h1>`
ulLeft.appendChild(leftli);
leftinput.value = '';
saveToLocalStorage();
}

function saveToLocalStorage() {
    const leftlistitems = ulLeft.innerHTML;
    localStorage.setItem('leftlist', leftlistitems);
    const leftpanel = listitems.innerHTML;
    localStorage.setItem('side-items', leftpanel);
}

ulLeft.innerHTML = localStorage.getItem('leftlist') ?? '';
listitems.innerHTML = localStorage.getItem('side-items') ?? '';
//end-left-list










//main-list
document.getElementById('list-item-add').addEventListener('click', getinput);
const ul = document.getElementById('list-items');
const input = document.getElementById('list-input');

function getinput() {
    let inputText = input.value;
    let li = document.createElement('li');
    
    li.innerHTML += `<input type="checkbox" style="margin: 10px">${inputText}<button class="p-2" onclick="remove(event)"id="deletebtn">🗑️</button>`;
    
    ul.appendChild(li);
    input.value = '';
    saveToLocalStorage();
    }


    function remove(event) {
        let removeButton = event.target;
        removeButton.parentElement.remove();
        saveToLocalStorage();
    }

    function saveToLocalStorage() {
        const leftlistitems = ulLeft.innerHTML;
        localStorage.setItem('leftlist', leftlistitems);
        localStorage.setItem('list', ul.innerHTML);
        const leftpanel = listitems.innerHTML;
        localStorage.setItem('side-items', leftpanel);
    }
    
    ulLeft.innerHTML = localStorage.getItem('leftlist') ?? '';
    listitems.innerHTML = localStorage.getItem('side-items') ?? '';
    ul.innerHTML = localStorage.getItem('list') ?? '';
    
