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

// Fetch coordinates asynchronously
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
            console.log('year:', year_filter);
            // Fetch density data for the current barangay
            getDocs(query(collection(db, "Mobility"), where("year", "==", "2020"), where("brgy_name", "==", barangay)))
            .then((mobilityListSnapshot) => {
                // Iterate over each document in the density collection
                mobilityListSnapshot.forEach((mobilityListDoc) => {
                    var mobilityListData = mobilityListDoc.data();
                    var density = mobilityListData.density;
                    
                    dalipugaCoords.push({ coordinates: coordinates, barangay: barangay, density: density });
                });
            })
            .catch((error) => {
                console.log("Error fetching density data for barangay", barangay, ": ", error);
            });
        } else {
            console.error("Latitude and longitude arrays have different lengths.");
        }
    });
})
.then(() => {
    // After fetching coordinates and density data, use dalipugaCoords array here
    console.log(dalipugaCoords);
})
.catch((error) => {
    console.log("Error fetching coordinates: ", error);
});



    export { dalipugaCoords };