//    Map() method 
cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

// Extract the names of cities only (city property of each object)
cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

cityPop = cities.map(function(pop){
    return pop.population
});
console.log(cityPop)

// 1) filter() 
var numbers = [1,2,3,4,5];
var larger = numbers.filter(large => large > 1);
console.log(larger);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var animalS = words.filter(an => an === "s");

// 2) sort() 
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge)

// 3) slicing
var integers = [0,1,2,3,4,5];
slice1 = integers.slice(0,2);
console.log(slice1)

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );