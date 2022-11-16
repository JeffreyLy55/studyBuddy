function weddingPlanner() {
    let numGuests = window.prompt("How many guests do you have?");
    let numTables = window.prompt("How many tables do you want?");
    let statement = numGuests%numTables;
    if (statement == 0) {
        let guestsPerTable = numGuests/numTables;
        alert("Your " + numGuests + " guests will be seated as follows: " + numTables + " tables of " + guestsPerTable + ".");
    } else {
        let fullTables = numTables - 1;
        let guestsAtFullTables = Math.floor(numGuests/numTables);
        let guestsAtSemiTable =  numGuests%numTables;
        alert("Your " + numGuests + " guests will be seated as follows: " + fullTables + " tables of " + guestsAtFullTables + ", and " + 1 + " table of " + guestsAtSemiTable);
    }

}


weddingPlanner();

