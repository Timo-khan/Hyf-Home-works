const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";


const indexOfNameToRemove = names.indexOf(nameToRemove);
  if (indexOfNameToRemove !== -1) {
    names.splice(indexOfNameToRemove, 1);
   }

console.log(names);