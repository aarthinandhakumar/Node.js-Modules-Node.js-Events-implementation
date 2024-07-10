Overview
This assignment involves building a simple Node.js application that works with a JSON data file containing ZIP code information. The application includes functionalities to lookup information by ZIP code, by city and state, and to get the population by state.

Part 1: Lookup by ZIP Code
Functionality:
Implement the lookupByZipCode function in the zipCodeModule_v1.js file.
The function should take a ZIP code as input and return the corresponding city, state, and population.

Usage:
The hw1a.js file should use this function to look up and display information for a given ZIP code.

Part 2: Lookup by City and State
Functionality:
Implement the lookupByCityState function in the zipCodeModule_v2.js file.
The function should take a city and state as input and return a list of ZIP codes and populations for that city.

Usage:
The hw1b.js file should use this function to look up and display information for a given city and state.

Part 3: Get Population by State
Functionality:
Implement the getPopulationByState function in the zipCodeModule_v1.js file.
The function should take a state as input and return the total population for that state.

Usage:
The hw1c.js file should use this function to look up and display the total population for a given state.

Installation
Ensure you have Node.js installed on your machine.
Navigate to the project directory: 
npm install

Running the Application
node hw1a.js
node hw1b.js
node hw1c.js

License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
