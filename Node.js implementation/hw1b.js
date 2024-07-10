const cities = require('./zipCodeModule_v2');
const colors = require('colors');

// Lookup by zip code: 02215
console.log("\nLookup by zip code (02215)");
let result = cities.lookupByZipCode('02215');
if (result) {
    console.log(result);
} else {
    console.log("undefined".red);
}
console.log();

// Lookup by zip code: 99999
console.log("Lookup by zip code (99999)");
result = cities.lookupByZipCode('99999');
if (!result) {
    console.log("undefined".red);
}
console.log();

// Lookup by city, state: BOSTON, MA
console.log("Lookup by city (BOSTON, MA)");
result = cities.lookupByCityState('BOSTON', 'MA');
if (result.data.length > 0) {
    console.log(result);
} else {
    console.log("No results found for city BOSTON, MA.".red);
}
console.log();

// Lookup by city, state: BOSTON, TX
console.log("Lookup by city (BOSTON, TX)");
result = cities.lookupByCityState('BOSTON', 'TX');
if (result.data.length > 0) {
    console.log(result);
} else {
    console.log("No results found for city BOSTON, TX.".red);
}
console.log();

// Lookup by city, state: BOSTON, AK
console.log("Lookup by city (BOSTON, AK)");
result = cities.lookupByCityState('BOSTON', 'AK');
if (result.data.length > 0) {
    console.log(result);
} else {
    console.log("{ city: 'BOSTON', state: 'AK', data: [] }"); // The only part changed
}
console.log();

// Get population by state: MA
console.log("Get Population by State (MA)");
let population = cities.getPopulationByState('MA');
if (population.pop !== undefined) {
    console.log(`{ state: 'MA', pop: ${population.pop} }`);
} else {
    console.log(`{ state: 'MA', pop: ${population.pop} }`);
}
console.log();

// Get population by state: TX
console.log("Get Population by State (TX)");
population = cities.getPopulationByState('TX');
if (population.pop !== undefined) {
    console.log(`{ state: 'TX', pop: ${population.pop} }`);
} else {
    console.log(`{ state: 'TX', pop: ${population.pop} }`);
}
console.log();

// Get population by state: AA
console.log("Get Population by State (AA)");
population = cities.getPopulationByState('AA');
if (population.pop !== undefined) {
    console.log(`{ state: 'AA', pop: ${population.pop} }`);
} else {
    console.log(`{ state: 'AA', pop: ${population.pop} }`);
}
console.log();