//simplyToDoList

const list = {
    "create a new practice task": "Done",
    "make a bed": "Done",
    "write a post": "ToDo",
    "do a homework": "ToDo",
    "learn english": "InProgress",
    "play the piano": "Done",
};

function addTask(task) {
    list[task] = "ToDo";
}

function deleteTask(task) {
    delete list[task];
}

function changeStatus(task, status) {
    list[task] = status;
}

function showList(){
    console.log('ToDo:');
    let toDoCounter = 0;
    for(let key in list){
        if(list[key] === "ToDo"){
            console.log(`"${key}"`);
            toDoCounter++;
        }
    }
    if(toDoCounter === 0){
        console.log("-");
    }
    console.log('InProgress:');
    let inProgressCounter = 0;
    for(let key in list){
        if(list[key] === "InProgress"){
            console.log(`"${key}"`);
            inProgressCounter++;
        }
    }
    if(inProgressCounter === 0){
        console.log("-");
    }
    console.log('Done:');
    let doneCounter = 0;
    for(let key in list){
        if(list[key] === "Done"){
            console.log(`"${key}"`);
            doneCounter++;
        }
    }
    if(doneCounter === 0){
        console.log("-");
    }
}


showList();