const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
 return 'Your notes...';
};

const addNote = function (title, body) {
 const notes = loadNotes();
 const duplicateNotes = notes.filter(function (note) {
  return note.title === title;
 });

 if (duplicateNotes.length === 0) {
  notes.push({
   title: title,
   body: body,
  });
  savedNotes(notes);
  console.log('New note added successfully');
 } else {
  console.log('Note title taken!');
 }
};

const removeNote = function (title) {
 const notes = loadNotes();
 const notesToKeep = notes.filter(function (note) {
  return note.title !== title;
 });

 if (notes.length > notesToKeep.length) {
  console.log(chalk.bgGreen(`Note removed successfully`));
  savedNotes(notesToKeep);
 } else {
  console.log(chalk.bgRed('No note found!'));
 }
};

const savedNotes = function (notes) {
 const dataJSON = JSON.stringify(notes);
 fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
 try {
  const data = JSON.parse(fs.readFileSync('notes.json'));
  return data;
 } catch (e) {
  return [];
 }
};
module.exports = {
 getNotes: getNotes,
 addNote: addNote,
 removeNote: removeNote,
};
