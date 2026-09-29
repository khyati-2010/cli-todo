const fs = require("fs");

const file = "todos.json"

function getTodos(){
    const data = fs.readFileSync(file, "utf-8");
    return JSON.parse(data);
}

function saveTodo(todos){
    fs.writeFileSync(file, JSON.stringify(todos, null, 2));
}

const command = process.argv[2];
const argument = process.argv[3];

const todos = getTodos();

if(command === "add"){
    const newTodo = {
        "id" : todos.length +1,
        "name" : argument,
        done: false,
    };
    todos.push(newTodo);
    saveTodo(todos);
    console.log("Todo added succesfully!")
}

else if(command ==="delete"){
    const id = Number(argument)
    const i = todos.findIndex(todo => todo.id===id)
    if(i===-1) console.log("Todo not found!")
    else{
        todos.splice(i, 1);
        saveTodo(todos)
        console.log("Todo deleted successfully.")
    }
}

else if(command ==="done"){
    const id = Number(argument)
    const todo = todos.find(todo => todo.id===id)
    if(!todo) console.log("Todo not found!")
    else{
        todo.done=true;
        saveTodo(todos)
        console.log("Todo marked as done.")
    }
}

else console.log("Invalid command entered.")