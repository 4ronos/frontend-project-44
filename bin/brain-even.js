import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

let correctTimes = 0
const name = greeting()

function mathQuestion() {
    while (correctTimes < 3) {
        const mathRand = Math.floor(Math.random() * 100)
        console.log('Question: ' + mathRand)
        const answer = readlineSync.question('Your answer: ')
        if (answer === `${mathRand % 2 === 0 ? "yes" : "no"}`) {
            console.log('Correct!')
            correctTimes += 1
            if (correctTimes == 3)
                console.log(`Congratulations, ${name}!`)
            mathQuestion()
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${mathRand % 2 === 0 ? "yes" : "no"}'.`)
            break
        }
        break
    }
}

const EvenOdd = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    
    mathQuestion()
}

EvenOdd()

export default EvenOdd;