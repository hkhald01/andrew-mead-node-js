// const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes');

// console.log(process.argv);

// Customize yargs version
yargs.version('1.1.0');

//create add command

yargs.command({
 command: 'add',
 describle: 'Add a new note',
 builder: {
  title: {
   describe: 'Note title',
   demandOption: true,
   type: 'string',
  },
  body: {
   describe: 'Note body',
   demandOption: true,
   type: 'string',
  },
 },
 handler: function (argv) {
  notes.addNote(argv.title, argv.body);
 },
});

//create remove command

yargs.command({
 command: 'remove',
 describle: 'Remove a note',
 builder: {
  title: { describle: 'Note title', demandOption: true, type: 'string' },
 },
 handler: function (argv) {
  notes.removeNote(argv.title);
 },
});

//create list command

yargs.command({
 command: 'list',
 describle: 'List all notes',
 handler: function () {
  console.log('Listing all notes!');
 },
});

//create read command

yargs.command({
 command: 'read',
 describle: 'Read a note',
 handler: function () {
  console.log('Reading a note!');
 },
});

// yargs.parse();

// add, remove, read, list

console.log(yargs.argv);

// const command = process.argv[2];
// if (command === 'add') {
//  console.log('Adding note');
// } else if (command === 'remove') {
//  console.log('Removing note!');
// }

// const msg = notes();

// console.log(chalk.blue(msg));

// console.log(chalk.white.bgBlue(validator.isEmail('heikel.khaldi@gmail.com')));

// console.log(
//  chalk.yellow.bgBlue.inverse(validator.isURL('https://www.google.com'))
// );

// console.log(chalk.magenta.bold('SUCCESS'));

// console.log(process.argv);
