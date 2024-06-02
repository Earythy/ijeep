// Import dalipugaCoords from coords.js
import { dalipugaCoords, brgyDensity } from './coords.js';

function getDalipugaCoords(callback) {
  setTimeout(() => {
    callback({ dalipugaCoords, brgyDensity });
  }, 5000);
}

// Usage
window.baranggayData = {
  "type": "FeatureCollection",
  "features": []
};

getDalipugaCoords((data) => {
  const dalipugaCoords = data.dalipugaCoords;
  const brgyDensity = data.brgyDensity;
  
  dalipugaCoords.forEach((item, index) => {
    // Access the coordinates and barangay name of each object
    console.log(item.coordinates);
    console.log(item.barangay);
    
    const feature = {
      "type": "Feature",
      "id": (index + 1).toString(),
      "properties": {
        "name": item.barangay,
        "density": item.density
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [item.coordinates]
      }
    };

    // Push the feature into window.baranggayData.features array
    window.baranggayData.features.push(feature);
  });

  // Attach event listener inside getDalipugaCoords callback
  document.addEventListener('yearFilterChanged', (event) => {
    console.log('yearFilterChanged');
    const density = event.detail.brgyDensity; // Use event.detail directly
    console.log('density:', density);
    window.baranggayData.features.forEach((feature) => {
      const barangayName = feature.properties.name;
      console.log(barangayName);
      console.log(density);
      density.forEach((brgyItem, index) => {
        console.log("brgy density");
        if(barangayName === brgyItem.barangay){
          console.log('same');
          feature.properties.density = brgyItem.density;
        }
      });
    });
  });
  

  // Log the completed window.baranggayData
  console.log(window.baranggayData);

  // Add the GeoJSON layer to the map
  window.baranggayLayer = L.geoJson(baranggayData).addTo(map);
});
