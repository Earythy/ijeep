import { routeCoords } from "./routeCoords.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  query,
  doc,
  getDoc,
  onSnapshot,
  where,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYPv8S_ljSo3tuMNoRYPI2tleWOqhqFMM",
  authDomain: "commumeter.firebaseapp.com",
  projectId: "commumeter",
  storageBucket: "commumeter.appspot.com",
  messagingSenderId: "1098693151947",
  appId: "1:1098693151947:web:c0ce3c093e75ae8cbe1f4e",
  measurementId: "G-71SRN52DX4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth();

function getRouteCoords(callback) {
  setTimeout(() => {
    callback({ routeCoords });
  }, 5000);
}

getRouteCoords((data) => {
  // Map configuration
  const mapConfig = { center: [8.2333, 124.2333], zoom: 13 };

  // Create the map
  const map = L.map("map").setView(mapConfig.center, mapConfig.zoom);

  // Add tile layer
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      'Leaflet © <a href="http://openstreetmap.org">OpenStreetMap</a>, contribution',
    maxZoom: 18,
    minZoom: 13,
  }).addTo(map);

  const routes = data.routeCoords;

  // Add dropdown menu to Leaflet map
  let dropdownOptions = {
    "Select Route": {
      disabled: true, // Disable the "Select Page" option
      hide: true, // Hide the "Select Page" option from the dropdown list
    },
  };

  routes.forEach((route) => {
    dropdownOptions[route.route] = {
      coords: route.coordinates, // Assign the coordinates to the option
    };
  });

  // Define custom control
  var CustomControl = L.Control.extend({
    onAdd: function (map) {
      var container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
      container.innerHTML = `
        <select name="dropdown" id="routeDropdown" onChange="dropdown()">
          ${Object.keys(dropdownOptions)
            .map((option) => {
              if (dropdownOptions[option].disabled) {
                return (
                  <option disabled selected>
                    ${option}
                  </option>
                );
              } else if (dropdownOptions[option].hide) {
                return (
                  <option disabled style="display:none">
                    ${option}
                  </option>
                );
              } else {
                return <option value="${option}">${option}</option>;
              }
            })
            .join("")}
        </select>
      `;
      return container;
    },
  });

  console.log(CustomControl);

  // Variable to store the currently displayed polyline
  let currentPolyline = null;
  let vehicleMarker = null;
  let unsubscribe = null;

  window.dropdown = function () {
    const dropdown = document.getElementById("routeDropdown");
    const selectedOption = dropdown.value;
    if (
      selectedOption &&
      dropdownOptions[selectedOption] &&
      dropdownOptions[selectedOption].coords
    ) {
      console.log(dropdown.value);

      // Remove existing polyline if it exists
      if (currentPolyline) {
        map.removeLayer(currentPolyline);
      }

      // Add new polyline
      var purpleLine = dropdownOptions[selectedOption].coords;
      currentPolyline = L.polyline(purpleLine, { color: "black" }).addTo(map);
    }

    // Remove the marker if the selected option is not "Dalipuga Route"
    if (vehicleMarker && dropdown.value !== "Dalipuga Route") {
      map.removeLayer(vehicleMarker);
      vehicleMarker = null; // Reset the marker variable
    }

    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }

    if (dropdown.value === "Dalipuga Route") {
      const vehicleDocRef = doc(db, "Vehicle", "Vehicle1");
      let timeoutId;
      let updateCount = 0; // Track the number of updates received
      unsubscribe = onSnapshot(
        vehicleDocRef,
        (docSnapshot) => {
          clearTimeout(timeoutId); // Clear previous timeout

          if (docSnapshot.exists()) {
            console.log("Document data:", docSnapshot.data());
            if (docSnapshot.data().Latitude && docSnapshot.data().Longitude) {
              // Convert latitude and longitude from strings to numbers
              const latitude = parseFloat(docSnapshot.data().Latitude);
              const longitude = parseFloat(docSnapshot.data().Longitude);
              if (!isNaN(latitude) && !isNaN(longitude)) {
                const vehicleLocation = [latitude, longitude];

                // Define custom icon
                const vehicleIcon = L.icon({
                  iconUrl: "../assets/img/car.png",
                  iconSize: [38, 38],
                  iconAnchor: [19, 38],
                  popupAnchor: [0, -38],
                });

                // Update the marker's location or create a new marker if it doesn't exist
                if (vehicleMarker) {
                  vehicleMarker.setLatLng(vehicleLocation);
                } else {
                  if (updateCount >= 1) {
                    // Show icon only from the second update onwards
                    vehicleMarker = L.marker(vehicleLocation, {
                      icon: vehicleIcon,
                    }).addTo(map);
                  }
                }

                updateCount++; // Increment the update count
              } else {
                console.log("Invalid latitude or longitude!");
              }
            } else {
              console.log("Location data is missing!");
            }
          } else {
            console.log("No such document!");
          }

          // Set a timeout to remove the marker if no update received within 10 minutes (600,000 milliseconds)
          timeoutId = setTimeout(() => {
            if (vehicleMarker) {
              map.removeLayer(vehicleMarker);
              vehicleMarker = null; // Reset the marker variable
            }
          }, 600000); // 10 minutes interval (600,000 milliseconds)
        },
        (error) => {
          console.error("Error getting document:", error);
        }
      );
    }
  };

  // Add custom control to map
  map.addControl(new CustomControl({ position: "topright" }));
});
