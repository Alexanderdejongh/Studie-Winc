function tellFortune(jobTitle, GeographicLocation, partnersName, numKids) {
    const future =
        "you will be a " +
        jobTitle +
        " in " +
        GeographicLocation +
        " with your wife; " +
        partnersName +
        " and have " +
        numKids +
        " childeren.";
    console.log(future);
}
tellFortune("chef", "Rotterdam", "Rebeecca", "4");
tellFortune("president", "Frace", "Princess Julietta", "12");

function calculateDogAge(yourPuppiesAge) {
    const calculatedAge = "Your dogs age is: " + yourPuppiesAge * 7;
    console.log(calculatedAge);
}
calculateDogAge(5);
calculateDogAge(14);

function calculateSupply(age, numPerDay) {
    const maxAge = 100;
    const totalNeeded = numPerDay * 365 * (maxAge - age);
    const message =
        "You will Need " +
        totalNeeded +
        " cups of tea to last you until the ripe old age of " +
        maxAge;
    console.log(message);
}
calculateSupply(28, 4);