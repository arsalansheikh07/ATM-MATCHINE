import inquirer from "inquirer";
let myBalance = 10000; // Dollar Amount
let myPin = 2426;
async function main() {
    let pinAnswer = await inquirer.prompt([{
            name: "pin",
            message: "Enter your PIN",
            type: "number"
        }]);
    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!!!");
        let operationAns = await inquirer.prompt([{
                name: "operation",
                message: "Please select an option",
                type: "list",
                choices: ["withdraw", "check balance", "fast cash"],
            }]);
        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    message: "Enter amount to withdraw",
                    type: "number"
                }]);
            if (amountAns.amount <= myBalance) {
                myBalance -= amountAns.amount;
                console.log("Now Your Balance is " + myBalance);
            }
            else {
                console.log("Insufficient balance");
            }
        }
        else if (operationAns.operation === "check balance") {
            console.log("Your current balance is " + myBalance);
        }
        else if (operationAns.operation === "fast cash") {
            let fast = await inquirer.prompt([{
                    name: "fast_operationAns",
                    message: "How much money you want to withdraw",
                    type: "list",
                    choices: ["1000", "2000", "5000"],
                }]);
            let amount = parseInt(fast.fast_operationAns);
            if (amount <= myBalance) {
                myBalance -= amount;
                console.log(`Your remaining balance is ${0}`);
            }
            else {
                console.log("Insufficient balance");
            }
        }
    }
    else {
        console.log("Invalid pin code");
    }
}
main();
