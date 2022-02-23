"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let student = {
    name: 'Jar Jar Binks',
    species: 'Gungan',
    mass: 66
};
console.log(student.name);
function printChar(char) {
    console.log(`My name is ${char.name}. I'm a ${char.species}.`);
}
printChar(student);
