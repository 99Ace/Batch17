// Step 1 : Set up options for the chart
const options =  {
    chart: {
        type:'bar',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'male',
            data:[175000,188000,190000,185000,190760,170000]
        },
        // add in the second data set 
        {
            name : 'female',
            data:[180000,190000,210000,200000,210000,100000]
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:['1999', '2000', '2001', '2002', '2003', '2004']
    }
    
}

// Step 2: create the chart using the option
const chart = new ApexCharts(document.querySelector('#charter'), options);
 
// Step 3 : Render the chart to the HTML
chart.render()
