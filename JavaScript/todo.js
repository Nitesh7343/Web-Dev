let todo = [];
let req = prompt("Please enter your request");

while(true) {
    if(req == "quit") {
        console.log("Quitting the app");
        break;
    }

    if(req =="list") {
        console.log("----------------");
        for(let i = 0; i < todo.length; i++) {
            console.log(i,todo[i]);
        }
        console.log("----------------"); 
    }
    else if(req == "add") {
        let task = prompt("Enter the task to be added");
        todo.push(task);
        console.log("task added to the list");
    }
    if(req == "delete") {
        let index = prompt("Enter the index of the task to be deleted");
        todo.splice(index,1);
        console.log("task deleted from the list");
    }
    else {
        console.log("Wrong request");
    }
    req = prompt("Please enter your request");
}