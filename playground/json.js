// let obj = {
//     name: 'Natty'
// }
// let stringObj = JSON.stringify(obj);

// let personString = '{"name": "Natty", "age": "30"}'
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
    title: 'Some Title',
    body: 'Some Body',
}
let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);