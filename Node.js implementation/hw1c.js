const colors = require('colors');
const { ZipCodeEmitter } = require('./zipCodeEmitter');

// Create the ZipCodeEmitter object using the default constructor
const cities = new ZipCodeEmitter();

// Event handlers

// Handler for lookupByZipCode event
cities.on('lookupByZipCode', result => {
    console.log("\nLookup by zip code (02215)");
    console.log("\nEvent LookupByZipCode raised!");
    if (result) {
        console.log(result);
    } else {
        console.log("undefined".red);
    }
    console.log();
});

// Handler for lookupByCityState event
cities.on('lookupByCityState', results => {
    console.log("\nLookup by city (BOSTON, MA)");
    console.log("\nEvent LookupByCityState raised! (Handler1)");
    console.log(results);
    console.log();
});

// Second handler for lookupByCityState event
cities.on('lookupByCityState', results => {
    console.log("\nEvent LookupByCityState raised! (Handler2)");
    console.log(`City: ${results.city}, State: ${results.state}`);
    results.data.forEach(item => {
        console.log(`${item.zip} has population of ${item.pop}`);
    });
    console.log();
});

// Handler for getPopulationByState event
cities.on('getPopulationByState', population => {
    console.log("\nGet Population by State (MA)");
    console.log("Event getPopulationByState raised!");
    if (population) {
        console.log(`{ state: '${population.state}', pop: ${population.pop} }`);
    } else {
        console.log(`{ state: 'MA', pop: 0 }`.red);
    }
    console.log();
});

// Perform operations
cities.lookupByZipCode('02215');
cities.lookupByCityState('BOSTON', 'MA');
cities.getPopulationByState('MA');