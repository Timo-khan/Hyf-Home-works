//Dog years calculation
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let humanYears = dogYearFuture - dogYearOfBirth;
let dogYear= humanYears * 7
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
    console.log("Your dog will be " +  humanYears + " human years old in 2027" + ".")
}
else {
    console.log ("Your dog will be " + dogYear + "dog years old in 2027" + ".") 
}