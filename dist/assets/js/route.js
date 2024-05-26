import { routeCoords } from './routeCoords.js';

function getRouteCoords(callback) {
  setTimeout(() => {
    callback({ routeCoords });
  }, 5000);
}

getRouteCoords((data) => {
  // Map configuration
  const mapConfig = { center: [8.2333, 124.2333], zoom: 13 };

  // Create the map
  const map = L.map('map').setView(mapConfig.center, mapConfig.zoom);

  // Add tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Leaflet © <a href="http://openstreetmap.org">OpenStreetMap</a>, contribution',
    maxZoom: 18,
    minZoom: 13,
  }).addTo(map);

  const routes = data.routeCoords; 

  // Add dropdown menu to Leaflet map
  let dropdownOptions = {
    "Select Route": {
      "disabled": true, // Disable the "Select Page" option
      "hide": true // Hide the "Select Page" option from the dropdown list
    }
  };

  routes.forEach((route) => {
    dropdownOptions[route.route] = {
      "coords": route.coordinates // Assign the coordinates to the option
    };
  });

  // Define custom control
  var CustomControl = L.Control.extend({
    onAdd: function (map) {
      var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
      container.innerHTML = `
        <select name="dropdown" id="routeDropdown" onChange="dropdown()">
          ${Object.keys(dropdownOptions).map(option => {
            if (dropdownOptions[option].disabled) {
              return `<option disabled selected>${option}</option>`;
            } else if (dropdownOptions[option].hide) {
              return `<option disabled style="display:none">${option}</option>`;
            } else {
              return `<option value="${option}">${option}</option>`;
            }
          }).join('')}
        </select>
      `;
      return container;
    }
  });

  console.log(CustomControl);

  // Variable to store the currently displayed polyline
  let currentPolyline = null;

  window.dropdown = function(){
    const dropdown = document.getElementById('routeDropdown');
    const selectedOption = dropdown.value;
    if (selectedOption && dropdownOptions[selectedOption] && dropdownOptions[selectedOption].coords) {
      console.log(dropdownOptions[selectedOption].coords);
      
      // Remove existing polyline if it exists
      if (currentPolyline) {
        map.removeLayer(currentPolyline);
      }

      // Add new polyline
      var purpleLine = dropdownOptions[selectedOption].coords;
      currentPolyline = L.polyline(purpleLine, {color: 'black'}).addTo(map);
    }
  }

  // Add custom control to map
  map.addControl(new CustomControl({ position: 'topright' }));

});
