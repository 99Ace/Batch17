let dataURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson ";

// # Step 1 : Test loading the data from API
async function loadData( url ) {
    let response = await axios.get( url );
    console.log(response.data)
}
// comment out once data is confirm loading
// loadData( dataURL ) 

// # Step 2: Load in the basic map - focus on singapore
let singapore = [ 1.29,103.85]; 
let map = L.map('map').setView(singapore, 13); 
let apiKey = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'

L.tileLayer( apiKey , {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// Step 3 : add in addEventListener
document.querySelector('#load-earthquake')
    .addEventListener('click', async function() {
        let response = await axios.get( dataURL );
        console.log(response.data.features)
        let data = response.data.features
        let markerCluster = L.markerClusterGroup();
        for (each of data) {
            let lat = each.geometry.coordinates[1];
            let lng = each.geometry.coordinates[0];
            L.marker( [ lat, lng ] ).addTo(markerCluster)
        }
        markerCluster.addTo(map)
    
    })