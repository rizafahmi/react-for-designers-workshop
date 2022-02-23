import { Student } from '../lib/types';

let student: Student = {
  name: 'Jar Jar Binks',
  species: 'Gungan',
  mass: 66
}

console.log(student.name);

function printChar(char: Student) {

  console.log(`My name is ${char.name}. I'm a ${char.species}.`);
}

printChar(student);