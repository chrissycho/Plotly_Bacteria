const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// 1) retrieve an object with its details 
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// 2) Find the latitude of the location of the Vandenberg Airforce Base 
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

// // Using map() method to print only latitude and longitutde coordinates of each SpaceX station
d3.json(url).then(function(spaceXResults){
latitude = spaceXResults.location.map(val => val.latitude);
console.log(latitude);
});


