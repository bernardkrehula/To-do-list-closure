let ul = document.querySelector('.to-do-list');
let input = document.querySelector('input');
let btn = document.querySelector('.btn');
let main = document.querySelector('.main');
let list = document.querySelector('.main li');
let toDoInput;
let id;
let activeId;
let activeIndex;
let newToDoValue;

function toDoManager() {
    let toDoArray = [];
    const getIndex = (currentManagerId) => {
        currentManagerId = toDoArray.find((element) => {
            return element.id == activeId;
        })
        activeIndex = toDoArray.indexOf(currentManagerId);
    }
    const addToDo = (toDo) => {
        toDoArray.push(toDo);
    }
    const getToDos = () => {
        return toDoArray;
    }
    const deleteText = () => {
        toDoArray.splice(activeIndex, 1)
    }
    return {addToDo, getToDos , deleteText, getIndex};
}
const manager = toDoManager();
input.addEventListener('input', (e) => {
    toDoInput = e.target.value;
})
btn.addEventListener('click', () => {
    const newToDo = {id: crypto.randomUUID(), value: toDoInput};
    manager.addToDo(newToDo);
    id = newToDo.id;
    newToDoValue = newToDo.value;
    makeNewBtn(id, newToDoValue);
})

function makeNewBtn(id, newToDoValue) {
    const html = `<button class="dugme" id="${id}">${value}</button>`;
    list = document.querySelector('.main li');
    list.insertAdjacentHTML('beforeend', html)
}

main.addEventListener('click', (event) => {
    if(event.target.className == 'dugme') {
        removeBtn(event)
        activeId = event.target.id;
        manager.getIndex();
        manager.deleteText();
    }
})

function removeBtn(event) {
    list = document.querySelector('.main li');
    let currentBtn = event.target;
    list.removeChild(currentBtn);
}



/* function counterCreator() {
    let count = 0;
    const getCount = () => {
        return count;
    }
    const incrementCount = () => {
        count += 1;
    }
    return {getCount, incrementCount};
}

const count1 = counterCreator();
count1.incrementCount();
count1.incrementCount();
count1.incrementCount();
console.log('count1: ', count1.getCount());
const count2 = counterCreator();
console.log('count2: ', count2.getCount()); */