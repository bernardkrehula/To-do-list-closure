let ul = document.querySelector(".to-do-list");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let main = document.querySelector(".main");
let list = document.querySelector(".main li");
let toDoInput;

//U manager napravi funkciju deleteToDo
//Ona treba da primi jedan argument - id
//Kad dobije taj id ona kaze: 
//ToDoArray = svi toDovi osim ovoga sa ovim id koji sam dobio
//To ce izbrisati toDo iz arraya 
//I svaki put kad pozovem manager.getToDos dobit cu array u kojem taj toDo nije vise

//Sto se tice ekrana i kako id da proslijedim u manager 
//Kad postavljam toDO na ekran ja mu stavim id
//Kad kliknem na neki toDo procitam taj id sa njega 
//Proslijedim ga u funkciju manager.deleteToDo

function toDoManager() {
    let toDoArray = [];
    const addToDo = (toDo) => {
        toDoArray.push(toDo);
    };
    const getToDos = () => {
        return toDoArray;
    };
   
    const deleteToDo = (eventId) => {
        let id = eventId;
        toDoArray = toDoArray.filter(objekt => objekt.id !== id)
        return toDoArray;
    }
    return { addToDo, getToDos, deleteToDo };
}
function toDoCreator(toDoValue) {
    let id = crypto.randomUUID();
    value = toDoValue;
    const getId = () => {return id}
    return {getId, value, id};
}
const manager = toDoManager();

input.addEventListener("input", (e) => {
    toDoInput = e.target.value;
});

btn.addEventListener("click", () => {
    const newToDo = toDoCreator(toDoInput);
    manager.addToDo(newToDo);
    makeNewBtn(newToDo.getId(), toDoInput);
    removeInputValue()
});
function makeNewBtn(id, toDoInput) {
    const html = `<button class="dugme" id="${id}">${toDoInput}</button>`;
    list = document.querySelector(".main li");
    list.insertAdjacentHTML("beforeend", html);
}

main.addEventListener("click", (event) => {
    if (event.target.className == "dugme") {
        removeBtn(event);
        manager.deleteToDo(event.target.id);
    }
});

function removeBtn(event) {
    list = document.querySelector(".main li");
    let currentBtn = event.target;
    list.removeChild(currentBtn);
}

function removeInputValue() {
    input.value = '';
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
