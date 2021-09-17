const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes');

const msg = notes();

console.log(chalk.blue(msg));

console.log(chalk.white.bgBlue(validator.isEmail('heikel.khaldi@gmail.com')));

console.log(chalk.yellow.bgBlue.inverse(validator.isURL('https://www.google.com')));

console.log(chalk.magenta.bold('SUCCESS'));
