// Importing EventEmitter from Node.js built-in events module
const EventEmitter = require('events').EventEmitter;
// Loading zip code data from zips.json
const data = require('./zips.json');

class ZipCodeEmitter extends EventEmitter {
    // Method to look up zip code and emit 'lookupByZipCode' event with result
    lookupByZipCode(zip) {
        const result = data.find(entry => entry._id === zip);
        this.emit('lookupByZipCode', result);
    }
// Method to look up city and state, format results, and emit 'lookupByCityState' event
    lookupByCityState(city, state) {
        const results = data.filter(entry => entry.city.toUpperCase() === city.toUpperCase() && entry.state.toUpperCase() === state.toUpperCase())
            .map(entry => ({ zip: entry._id, pop: entry.pop }));
             // Formatting results into an object
        const formattedResults = {
            city: city.toUpperCase(),
            state: state.toUpperCase(),
            data: results
        };
        this.emit('lookupByCityState', formattedResults);
    }
// Method to calculate population by state and emit 'getPopulationByState' event
    getPopulationByState(state) {
        const population = data.reduce((totalPopulation, entry) => {
            return entry.state.toUpperCase() === state.toUpperCase() ? totalPopulation + entry.pop : totalPopulation;
        }, 0);
        const result = { state: state.toUpperCase(), pop: population };
        this.emit('getPopulationByState', result);
    }
}
// Exporting ZipCodeEmitter class to be used in other modules
module.exports.ZipCodeEmitter = ZipCodeEmitter;