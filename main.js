import inquirer from "inquirer";
//user variable
let todo = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "todoitem",
            type: "input",
            message: 'add todo item in listing'
        },
        {
            name: "addmore",
            type: 'list',
            choices: ["yes", "No"]
        }
    ]);
    // output  of program.
    const { todoitem, addmore } = input;
    todo.push(todoitem);
    if (addmore == "no") {
        console.log("todo listing");
        //add more item
        for (let i = 0; i < todo.length; i++) {
            console.log(todo[i]);
        }
        // exit loop
        break;
    }
}
