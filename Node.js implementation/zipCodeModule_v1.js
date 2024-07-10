const data = require('./zips.json');// Importing data from zips.json

module.exports.lookupByZipCode = (zip) => {// Function to lookup by zip code
    for (let i = 0; i < data.length; i++) {
        if (data[i]._id === zip) {
            return data[i];
        }
    }
    return undefined;
};

module.exports.lookupByCityState = (city, state) => {// Function to lookup by city and state
    const results = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].city === city && data[i].state === state) {
            results.push({ zip: data[i]._id, pop: data[i].pop });
        }
    }
    if (results.length > 0) {
        return { city, state, data: results };
    } else {
        return { city, state, data: [] };
    }
};

module.exports.getPopulationByState = (state) => {// Function to get population by state
    let totalPopulation = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].state === state) {
            totalPopulation += data[i].pop;
        }
    }
    if (totalPopulation > 0) {
        return { state, pop: totalPopulation };
    } else {
        return { state, pop: 0 };
    }
};