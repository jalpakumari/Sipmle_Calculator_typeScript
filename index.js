#! /usr/bin/env node
import inquirer from "inquirer";
//Printing a wellcome Message
console.log("\n\tWellCome to \'CodeWithjalpa\' - CLI Simple Calculator\n");
// Asking Questions from Users through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Persantage"],
    },
]);
// console.log(answers);
//conditional statement if-else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else if (answers.operator === "Persantage") {
    console.log(answers.firstNumber % answers.secondNumber);
}
else {
    ("Invalid Input");
}
;
