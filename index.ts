import inquirer from "inquirer";
import chalk from "chalk";


let myBalance = 5000;
let myPin = 12345;

console.log(chalk.blue("\n \tWelcome to Code with Tayyaba - ATM Machine\n"));

let pinAnswer =await inquirer.prompt(
    [
        {
            name: "pin",
            type: "number",
            message: chalk.yellow("Enter your pin code:")
        }
    ])
   if(pinAnswer.pin === myPin){
    console.log("Pin is correct' login successfully!");
    //console.log("Current Account Balance is ${myBalance}")

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["Withdraw Amount","Check Balance"]
        }
    ])
    if(operationAns.operation ==="Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
               name: "withdrawMethod",
               type: "list",
               message: "Select a withdraw method",
               choices: ["fast cash", "enter amount"]
            }
        ])
        if(withdrawAns.withdrawMethod === "fast cash"){
            let fastCashAns = await inquirer.prompt([
           {
                name: "fast cash",
                type: "list",
                message: "select amount:",
                choices: [ 1000, 2000, 5000, 10000, 20000, 50000]
            }
        ])
        if(fastCashAns.fastCash > myBalance){
            console.log("insufficient Balance");
        }
        else{
            myBalance -= fastCashAns.fastCash
            console.log('${fastCashAns.fastCash} Withdraw Successfully');
            console.log( 'Your Remaining Balance is: ${myBalance}');
        }
        }
     else   if(withdrawAns.withdrawMethod === "Enter Amount")
            {  let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ])
if(amountAns.amount > myBalance){
    console.log("Insufficient Balance"); 

}
else{
    myBalance -= amountAns.amount;
    console.log('${amountAns.amount} Withdraw Successfully');
    console.log(`Your Remaining Balance is:${myBalance}`);
}


        }
      
    }
    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);

    }
    
    }
    else{
        console.log('Pin is Incorrect, Try Again!');
    }

   