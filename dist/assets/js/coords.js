import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, collection, query, getDocs, where } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDYPv8S_ljSo3tuMNoRYPI2tleWOqhqFMM",
    authDomain: "commumeter.firebaseapp.com",
    projectId: "commumeter",
    storageBucket: "commumeter.appspot.com",
    messagingSenderId: "1098693151947",
    appId: "1:1098693151947:web:c0ce3c093e75ae8cbe1f4e",
    measurementId: "G-71SRN52DX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);
// Define dalipugaCoords as an empty array
let dalipugaCoords = [];
let brgyDensity = [];

document.addEventListener('DOMContentLoaded', function () {

year_filter.addEventListener("change", async function(){
    console.log('changed');

    var yearValue = year_filter
    await datafetch(yearValue);
    setTimeout(() => {
        console.log('dispatched');
        document.dispatchEvent(new CustomEvent('yearFilterChanged', { detail: { brgyDensity } }));
        
    }, 5000);
    
});

function datafetch(yearValue) {
    brgyDensity = [];
    console.log(yearValue);
    // Fetch density data for the current barangay
    return getDocs(query(collection(db, "Mobility"), where("year", "==", yearValue)))
        .then((mobilityListSnapshot) => {
            // Iterate over each document in the density collection
            mobilityListSnapshot.forEach((mobilityListDoc) => {
                var mobilityListData = mobilityListDoc.data();
                var density = mobilityListData.density;
                var barangay = mobilityListData.brgy_name;
                
                brgyDensity.push({ barangay:barangay, density: density });
            });
        }).then(() => {
            // After fetching coordinates and density data, use dalipugaCoords array here
            console.log(brgyDensity);
        })
        .catch((error) => {
            console.log("Error fetching density data for barangay", barangay, ": ", error);
        });
        
}

getDocs(query(collection(db, "Coordinates")))
    .then((coordListSnapshot) => {
        // Iterate over each document in the collection
        coordListSnapshot.forEach((coordListDoc) => {
            var coordListData = coordListDoc.data();
            var barangay = coordListData.brgy_name;
            var latitude = coordListData.latitude;
            var longitude = coordListData.longitude;
            console.log(barangay);

            // Ensure latitude and longitude are arrays of the same length
            if (latitude.length === longitude.length) {
                // Zip latitude and longitude arrays into coordinate pairs
                var coordinates = longitude.map((longitude, index) => [longitude, latitude[index]]);
                console.log(coordinates);

                
                dalipugaCoords.push({ coordinates: coordinates, barangay: barangay });
            } else {
                console.error("Latitude and longitude arrays have different lengths.");
            }
        });
    })
.then(() => {
    // After fetching coordinates and density data, use dalipugaCoords array here
    console.log(dalipugaCoords);
    var yearValue = year_filter.value;
    datafetch(yearValue);
})
.catch((error) => {
    console.log("Error fetching coordinates: ", error);
});

});

    export { dalipugaCoords, brgyDensity };
