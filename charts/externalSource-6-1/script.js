// STEP 1: load in data - make sure u able to load in the data
async function loadData() {
    const response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fake-graph-data');
    return response.data.temperatures;
}
window.addEventListener('DOMContentLoaded', async ()=>{
    let series = await loadData();
    console.log(series)
    // STEP 3: pass the data into the chart
    chart.updateSeries([{
        'name': 'Temperature',
        'data': series
    }])

})

// STEP2 : setup options and render empty chart
// load in options
const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    series:[   
    ],
    noData: {
        "text": "Loading..."
    }
}
// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);
 
// render the chart
chart.render()