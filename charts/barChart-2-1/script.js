// Step 1 : Set up options for the chart
const options =  {
    chart: {
        type:'bar',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'revenue',
            data:[120000, 75000, 80000, 45000, 33000, 55000]
        },
        // add in the second data set 
        {
            name : 'losses',
            data:[25000, 15000, 30000, 5000, 120000, 12500]
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    
}
// Step 2: create the chart using the option
const chart = new ApexCharts(document.querySelector('#charter'), options);
 
// Step 3 : Render the chart to the HTML
chart.render()
