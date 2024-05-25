#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const QUIZE = await inquirer.prompt([
    {
        name: "quistion_1",
        type: "list",
        message: "What is TypeScript primarily used for?",
        choices: [
            "a) Server-side programming",
            "b) Database management",
            "c) Adding static types to JavaScript",
            "d) Creating operating systems",
        ],
    },
    {
        name: "quistion_2",
        type: "list",
        message: "Which of the following is a correct way to define a variable in TypeScript?",
        choices: [
            "a) var number: number = 5;",
            "b) let number = '5';",
            "c) const number: string = 5;",
            "d) let number: number = 5;",
        ],
    },
    {
        name: "quistion_3",
        type: "list",
        message: "How do you specify that a function returns a number in TypeScript?",
        choices: [
            "a) function add(a: number, b: number): string {}",
            "b) function add(a: number, b: number): number {}",
            "c) function add(a: string, b: string): number {}",
            "d) function add(a: string, b: string): string {}",
        ],
    },
    {
        name: "quistion_4",
        type: "list",
        message: "Which of the following is NOT a TypeScript data type?",
        choices: ["a) number", "b) string", "c) boolean", "d) decimal"],
    },
    {
        name: "quistion_5",
        type: "list",
        message: "What does the '!' (exclamation mark) operator do in TypeScript?",
        choices: [
            "a) Asserts that a value is not null or undefined",
            "b) Converts a value to boolean",
            "c) Declares a new variable",
            "d) Imports a module",
        ],
    },
]);
let score = 0;
switch (QUIZE.quistion_1) {
    case "c) Adding static types to JavaScript":
        console.log(chalk.bold.italic.greenBright("1Q : Your Answer Is Correct"));
        score += 10;
        break;
    default:
        console.log(chalk.bold.redBright("1Q : Your Answer Is Incorrect!"));
        console.log("1Q : This Is Correct Answer = c) Adding static types to JavaScript");
        break;
}
switch (QUIZE.quistion_2) {
    case "d) let number: number = 5;":
        console.log(chalk.bold.italic.greenBright("2Q : Your Answer Is Correct"));
        score += 10;
        break;
    default:
        console.log(chalk.bold.redBright("2Q : Your Answer Is Incorrect!"));
        console.log("2Q : This Is Correct Answer = d) let number: number = 5;");
        break;
}
switch (QUIZE.quistion_3) {
    case "b) function add(a: number, b: number): number {}":
        console.log(chalk.bold.italic.greenBright("3Q : Your Answer Is Correct"));
        score += 10;
        break;
    default:
        console.log(chalk.bold.redBright("3Q : Your Answer Is Incorrect!"));
        console.log("3Q : This Is Correct Answer = b) function add(a: number, b: number): number {}");
        break;
}
switch (QUIZE.quistion_4) {
    case "d) decimal":
        console.log(chalk.bold.italic.greenBright("4Q : Your Answer Is Correct"));
        score += 10;
        break;
    default:
        console.log(chalk.bold.redBright("4Q : Your Answer Is Incorrect"));
        console.log("4Q : This Is Correct Answer = d) decimal");
        break;
}
switch (QUIZE.quistion_5) {
    case "a) Asserts that a value is not null or undefined":
        console.log(chalk.bold.italic.greenBright("5Q : Your Answer Is Correct"));
        score += 10;
        break;
    default:
        console.log(chalk.bold.redBright("5Q : Your Answer Is Incorrect"));
        console.log("5Q : This Is Correct Answer = a) Asserts that a value is not null or undefined");
        break;
}
console.log(chalk.bold.underline.green(`\n\t Your Score Is = ${score} \n\t`));
