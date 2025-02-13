function growMonsters() {
    let startPopulation = parseFloat(prompt("Enter a value for initial population:"));
    let growthRate = parseFloat(prompt("Enter a value for rate of growth:"));
    let duration = parseFloat(prompt("Enter a value for time:"));
    
    let endPopulation = Math.ceil(startPopulation * Math.pow(Math.E, (growthRate * duration)));

    let monsterLocation = prompt("Enter the region of the monster:");
    let monsterType = prompt("Enter the name of the monster:");

    let monsterFullName = (monsterLocation + " " + monsterType).toUpperCase();

    document.getElementById("result").innerText = 
        "After " + duration + " hours, the population of " + monsterFullName + " has risen to " + endPopulation + ".";
}
