#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const currencyRates:any = {
    INR: 83,
    PKR: 278,
    UAE: 3.67,
    USA: 1
};

let answer = await inquirer.prompt(
    [
        {
            name:"from",
            type: "list",
            choices: ["USA","PKR","INR","UAE"],
            message: (chalk.green ("choice your from cunrrency"))
    
        },
        {
            name:"to",
            type: "list",
            choices: ["USA","PKR","INR","UAE"],
            message: (chalk.green("choice your from cunrrency"))

        },
        {
            name:"amount",
            type:"number",
            message:(chalk.green("Enter your amount"))

        }
    ]
);

let fromAmount = currencyRates[answer.from];
let toAmount = currencyRates[answer.to];
let amount = answer.amount

let baseAmount = amount / fromAmount;
let currencyConverter = baseAmount * toAmount;
console.log(chalk.green(currencyConverter));

