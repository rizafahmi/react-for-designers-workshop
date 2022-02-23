let student: {
  name: string
  species: string
  mass: number
} = {
name: 'Jar Jar Binks',
species: 'Gungan',
mass: 66
}

console.log(student.name);

function printChar(char: {
name: string
species: string
mass: number
hairColor?: string
}) {

  console.log(`My name is ${char.name}. I'm a ${char.species}.`);
  
}

printChar(student);