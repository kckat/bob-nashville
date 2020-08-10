mapboxgl.accessToken = 'pk.eyJ1Ijoia2NrYXRhbGJhcyIsImEiOiJjamRneW9janQwcXJmMnhuOWZ0amVlZGVpIn0.-CYVo1BCQ7ifORWHsagRWA';
const closer = document.querySelector('#closeDirectory');
const opener = document.querySelector('#openDirectory');
const directory = document.querySelector('#directory')
const mapBox = document.querySelector('#map')

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/kckatalbas/ckdow1fw202mz1ipg1xc1d8p3/draft',
  center: [-86.783, 36.154],
  zoom: 11.64
});

// code from the next step will go here!

map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['bobnashville'] 
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    .addTo(map);
});




function closeDirectory() {
    directory.classList.add('closeDir')
    mapBox.classList.add('expandMap')
    console.log('test')
}

closer.addEventListener("click", closeDirectory);