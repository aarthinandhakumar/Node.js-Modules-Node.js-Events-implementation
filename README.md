## Overview

This assignment involves building a simple Node.js application that works with a JSON data file containing ZIP code information. The application includes functionalities to lookup information by ZIP code, by city and state, and to get the population by state.

## Part 1: Node.js modules
## Functionality:

The zipCodeModule_v1.js module should export the functions lookupByZipCode(zip), lookupByCityState(city,state) and getPopulationByState(state) only by using for loops and if statements.

## Usage:

The hw1a.js file should use this functionality to look up by zipcode, by city and state, and to get population by state.

## Part 2: Node.js modules
## Functionality:

The zipCodeModule_v2.js module should export the functions lookupByZipCode(zip), lookupByCityState(city,state) and getPopulationByState(state) only by using array methods like find, filter, map and reduce.

## Usage:

The hw1b.js file should use this functionality to look up by zipcode, by city and state, and to get population by state.

## Part 3: Node.js events
## Functionality:

The ZipCodeEmitter class provides the member functions lookupByZipCode(zip), lookupByCityState(city,state) and getPopulationByState(state) to emit the respective event names along with the results in the part 1 and 2.

## Usage:

The hw1c.js file should use this function to look up by zipcode, by city and state, and to get population by state and to emit the respective events.

## Installation

1. Ensure you have Node.js installed on your machine.
2. Navigate to the project directory: 
3. npm install

## Running the Application

1. node hw1a.js
2. node hw1b.js
3. node hw1c.js

## License

This project is licensed under the MIT License - see the [LICENSE](License.txt) file for details.
