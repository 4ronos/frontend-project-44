import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

let correctTimes = 0
const name = greeting()

function gameLogic(mathGame) {
    while (correctTimes < 3) {
        if (mathGame === 'Even') {
            var mathParam = Math.floor(Math.random() * 100)
            var mathCheck = `${mathParam % 2 === 0 ? "yes" : "no"}`
        } else {
            var sumOne = Math.floor(Math.random() * 25)
            var sumTwo = Math.floor(Math.random() * 25)
            var mathOperator = `+`
            var mathParam =  `${sumOne} ${mathOperator} ${sumTwo}`
            var mathCheck = `${sumOne + sumTwo}`
            
        }
        console.log('Question: ' + mathParam)
        let answer = readlineSync.question('Your answer: ')
        if (answer.toLowerCase() === mathCheck) {
            console.log('Correct!')
            correctTimes++
            if (correctTimes == 3)
                console.log(`Congratulations, ${name}!`)
        } else {
            console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${mathCheck}'.\nLet's try again, ${name}!` )
            break
        }
    }
}

export default gameLogic;