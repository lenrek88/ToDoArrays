// const list = {
//     "create a new practice task": "In Progress",
//     "write a post": "To Do",
//     "make a bed": "Done",
// }
//
// function changeStatus(task,status) {
//     if (task in list) {
//         for (const name in list) {
//             if (name === task) {
//                 list[name] = status;
//             }
//         }
//     } else {
//         console.log("Неверное название задачи!");
//     }
// }
//
// function addTask(task) {
//     list[task] = 'To Do';
// }
//
// function deleteTask(task) {
//     if (task in list) {
//         delete list[task];
//     } else {
//         console.log("Неверное название задачи!");
//     }
// }
//
// function showList() {
//     let sum = 0;
//     console.log("Todo:")
//     for (const name in list) {
//         if (list[name] === "To Do") {
//             console.log(`   "${name}"`);
//             sum += 1;
//         }
//     }
//     if (sum === 0) {
//         console.log("   -");
//     }
//
//     console.log("");
//
//     sum = 0;
//
//     console.log("In Progress:")
//     for (const name in list) {
//         if (list[name] === "In Progress") {
//             console.log(`   "${name}"`);
//             sum += 1;
//         }
//     }
//     if (sum === 0) {
//         console.log("   -");
//     }
//
//     console.log("");
//     sum = 0;
//     console.log("Done:")
//     for (const name in list) {
//         if (list[name] === "Done") {
//             console.log(`   "${name}"`);
//             sum += 1;
//         }
//     }
//
//     if (sum === 0) {
//         console.log("   -");
//     }
// }
//
// addTask("Go to school");
//
// changeStatus("Go to school", "In Progress")
//
// showList();


const list = [
    {name: 'create a post', status: 'In Progress', priority: 'low'},
    {name: 'test', status: 'Done', priority: 'high'},
];

function addTask(name){
    const task = {name: name, status: 'To Do', priority: 'low'}
    list.splice(list.length-1, 0, task);
}

function deleteTask(task){
    const pos = list.findIndex(list => list.name === task);
    list.splice(pos,1);
}

function changeStatus(task, status){
    const pos = list.findIndex(list => list.name === task);
    console.log(pos)

    const findTask = list.find(list => list.name === task);
    console.log(findTask)

    findTask.status = status;
    console.log(findTask)

    list[pos] = findTask;
}

function showList(){
    const ToDoObjects = list.filter(task => task.status === 'To Do');
    const ToDoList = ToDoObjects.map(task => task.name);
    const stringToDo = ToDoList.join('\n           ');



    const InProgress = list.filter(task => task.status === 'In Progress');
    const InProgressList = InProgress.map(task => task.name);
    const stringInProgress = InProgressList.join('\n            ');

    const DoneObject = list.filter(task => task.status === 'Done');
    const DoneList = DoneObject.map(task => task.name);
    const stringDone = DoneList.join('\n               ');

    console.log(
        `
        Todo:
            ${stringToDo}
        
        In Progress:
            ${stringInProgress}
        
        Done:
            ${stringDone}
        `
    )
};

addTask('learn English');
addTask('clean in home');



changeStatus('learn English', 'In Progress');

addTask('write a post');

changeStatus('learn English', 'Done')
changeStatus('clean in home', 'In Progress');

addTask('make a bad');



showList();

