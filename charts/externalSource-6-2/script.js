let url1 = "https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/meteors.json"
let url2 = "https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/sightings.json"

// STEP 1: load in data - make sure u able to load in the data
async function loadData(url) {
    const response = await axios.get(url);
    return response.data;
}
window.addEventListener('DOMContentLoaded', async () => {
    // 6.2 load 2 in one chart 
    let series = await loadData(url1);
    // console.log(series)
    let series2 = await loadData(url2);
    // console.log(series2)
    // STEP 3: pass the data into the chart
    chart.updateSeries(
        [
            {
                'name': 'Meteors',
                'data': series
            },
            {
                'name': 'Sightings',
                'data': series2
            }
        ]
    )

    // 6.3 sync code
    let seriesA = await loadData(url1);
    console.log(seriesA)
    let seriesB = await loadData(url2);
    console.log(seriesB)

    meteorChart.updateSeries(
        [
            {
                'name': 'Meteors',
                'data': series
            }
        ]
    )
    sightingChart.updateSeries(
        [
            {
                'name': 'Sightings',
                'data': seriesB
            }
        ]
    )


})

// STEP2 : CHART 1 setup options and render empty chart
// load in options
const options = {
    chart: {
        type: 'line',
        height: "100%"
    },
    series: [
    ],
    noData: {
        "text": "Loading..."
    }
}
// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

// render the chart
chart.render()



// ====================================
// SYNC CHARTS
// ====================================
// Create the line chart
const meteorChartOptions = {
    chart: {
        id: "sync",
        type: "line",
        height: "100%",
        width: "100%",
        group: "sync-charts"
    },
    // each series represents one set of data
    series: [
    ],
    noData: {
        "text": "Loading..."
    }
};
// create the chart
const meteorChart = new ApexCharts(
    document.querySelector("#chart2"),
    meteorChartOptions
);

// render the chart
meteorChart.render();

const sightingChartOptions = {
    chart: {
        id: "sighting",
        type: "line",
        height: "100%",
        width: "100%",
        group: "sync-charts"
    },
    // each series represents one set of data
    series: [
    ],
    noData: {
        "text": "Loading..."
    }
};
// create the chart
const sightingChart = new ApexCharts(
    document.querySelector("#chart3"),
    sightingChartOptions
);

// render the chart
sightingChart.render();