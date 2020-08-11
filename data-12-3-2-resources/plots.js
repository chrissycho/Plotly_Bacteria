const url = "https://api.spacexdata.com/v2/launchpads";

// Use d3.json() to read samples.json into the script 
d3.json("samples.json").then(function(data){
    console.log(data);
});

// 1) Examine metadata array of the data object
// Extract only the wfreq of each person into a new array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Sort by descending order 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// Delete null values by .filter() 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// All the metadata for the first person in the samples.json() for ID 940
d3.json("samples.json").then(function(data){
    firstPerson=data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value])=>
    {console.log(key + ':' + value);});
});
