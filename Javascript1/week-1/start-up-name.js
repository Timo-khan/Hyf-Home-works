//Startup name creation
const firstWords = ["Easy", "Awesome", "Corporate", "Tech", "Bright", "Smart", "Next", "Fast", "Global", "Innovative"];
const secondWords = ["Solutions", "Systems", "Inc", "Corporation", "Labs", "Group", "Studios", "Concepts", "Enterprise", "Ventures"];
const firstRandomNumber = firstWords[(Math.floor(Math.random() * (firstWords.length)))];
const secondRandomNumber = secondWords[(Math.floor(Math.random() * (secondWords.length)))];
const startupName = (firstRandomNumber + " " + secondRandomNumber);
console.log(startupName)