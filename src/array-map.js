let animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" }
];

/* let dogs = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === "dog") {
    dogs.push(animals[i]);
  }
} */
let isDog = function(animal) {
  return animal.species === "dog";
};
let dogs = animals.filter(isDog);

console.log(dogs);
