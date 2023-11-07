import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer"


const res = await inquirer.prompt({
    type: "number",
    name: "user_input",
    message: "Enter the amount of seconds",
    validate :(input)=>{
    if (isNaN(input)){
        console.log("\nPlease enter a valid number 😔");
        process.exit()
    }else if (input > 60){
        console.log("\nSeconds must be in 60 😖");
        process.exit()
    } else{
        return true;
    }
    }
});

let input = res.user_input

function startTime(value:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + value)
    const intervalTime = new Date(intTime)
    setInterval((()=>{
        const currentTime = new Date()
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0){
            console.log("Timer has expired!");
            process.exit()
        }
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600)
        const sec = Math.floor(timeDifference % 60)
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }),1000);
}

startTime(input);