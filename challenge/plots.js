function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    var Sample = sampleNames[0];
    buildMetadata(Sample);
    buildCharts(Sample);
})}

init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    Object.entries(result).forEach(([key, value])=>{
    PANEL.append("h6").text(key.toUpperCase() + ': ' + value);
  });
});
}

function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
    var sampleData = data.samples;
    var resultArray = sampleData.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // 1. bar chart data
    var OtuIDs = result.otu_ids.slice(0,10).map(IDs => {return 'OTU' +IDs;}).reverse();
    var sampleValues= result.sample_values.slice(0,10).reverse();
    var OtuLabels = result.otu_labels.slice(0,10).reverse();

    var trace = [{
      x: sampleValues,
      y: OtuIDs,
      text: OtuLabels,
      name: "Top 10",
      type: "bar",
      orientation: "h"
    }];

    var barChart_layout= {
      margin: {
        t:50,
        l: 140, },
        title: {text: "Top 10 OTUs"}
      };
    
      // 2. bubble chart data 
    var OtuId = result.otu_ids; 
    var bubbleSampleValues= result.sample_values;
    var bubbleSampleLabels= result.otu_labels;
    
    var bubbleTrace = [{
    x: OtuId,
    y: bubbleSampleValues,
    mode: 'markers',
    text: bubbleSampleLabels,
    marker: {
      size: bubbleSampleValues,
      color: OtuId
    }
    }];

    var bubbleChart_layout = {
      width: 900,
      height: 500,
      margin: {t:0, b:0},
      xaxis: {title: 'OTU ID'},
      showticklabels: true,
      tickangle: 'auto'
    };

    // 3. Gauge chart data 
    var metaFreq= data.metadata.filter(sampleObj => sampleObj.id == sample);
    var result= metaFreq[0];
    var Freq = result.wfreq
    
    var gauge_trace = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: Freq,
        title: {text: "Belly Button Washing Frequency <br> Scrubs per Week", font: {size: 24}},
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: { range: [null, 10]},
          bar: { color: "cyane" },
          steps: [
            { range: [0, 1], color: 'rgba(193, 66, 66, 0.3)' },
            { range: [1, 2], color: 'rgba(193, 66, 66, 0.5)' },
            { range: [2, 3], color: 'rgba(193, 66, 66, 0.6)' },
            { range: [3, 4], color: 'rgba(193, 66, 66, 0.7)' },
            { range: [4, 5], color: 'rgba(193, 66, 66, 0.8)' },
            { range: [5, 6], color: 'rgba(193, 66, 66, 0.9)' },
            { range: [6, 7], color: 'rgba(193, 66, 66, 1)' },
            { range: [7, 8], color: 'rgba(153,51,51,1)' },
            { range: [8, 9], color: 'rgba(114,38,38,1)' },
            { range: [9, 10], color: 'rgba(76,25,25,1)' }
          ],
        }  
      }
    ];
    
    var gauge_layout = {
      
      
      width: 600, 
      height: 500, 
      margin: { t: 0, b: 0 }
    };
    

  Plotly.newPlot('bar', trace, barChart_layout);
  Plotly.newPlot('bubble', bubbleTrace, bubbleChart_layout);
  Plotly.newPlot('gauge', gauge_trace, gauge_layout);

  });
}

