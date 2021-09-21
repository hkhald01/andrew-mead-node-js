const fs = require('fs');
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

const savedNotes = function (notes) {
 const dataJSON = JSON.stringify(notes);
 fs.writeFileSync('notes.json');
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
};
