let ul = document.querySelector('.to-do-list');
let input = document.querySelector('input');
let btn = document.querySelector('button');
let toDoInput;

function toDoManager() {
    let toDoArray = [];
    const addToDo = (toDo) => {
        toDoArray.push(toDo);
    }
    const getToDos = () => {
        return toDoArray;
    }
    return {addToDo, getToDos};
}
const manager = toDoManager();
console.log(manager.getToDos())
console.log(manager)

input.addEventListener('input', (e) => {
    toDoInput = e.target.value;
})
btn.addEventListener('click', () => {
    const newToDo = {id: crypto.randomUUID(), value: toDoInput};
    manager.addToDo(newToDo);
    console.log(manager.getToDos())
})
function counterCreator() {
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
console.log('count2: ', count2.getCount());