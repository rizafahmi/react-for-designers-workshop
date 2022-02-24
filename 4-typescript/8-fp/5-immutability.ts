const player = {
  name: "Anakin Skywalker",
  location: "Tatooine",
  age: 34
};

const newPlayer = {...player, age: player.age+1};
// const newPlayer = Object.assign({}, player, {age: player.age+1});

console.log(player);
console.log(newPlayer);