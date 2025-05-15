const { select } = require('@inquirer/prompts');
const choices = require('./utils/choices');
const {printer} = require('./utils/printer');
const handleSwitch = require('./utils/switch');
require('dotenv').config()
const main = async () => {
    let answer;
    do {
        printer();
        answer = await select({
            message: '¿Que desea hacer?',
            choices: choices
        });
        await handleSwitch(answer);
    } while (answer !== 'exit');
}

main();
