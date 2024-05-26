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
let routeCoords = [];

document.addEventListener('DOMContentLoaded', function () {

getDocs(query(collection(db, "Routes")))
    .then((routeListSnapshot) => {
        // Iterate over each document in the collection
        routeListSnapshot.forEach((routeListDoc) => {
            var routeListData = routeListDoc.data();
            var route = routeListData.route_name;
            var latitude = routeListData.latitude;
            var longitude = routeListData.longitude;
            console.log(route);

            // Ensure latitude and longitude are arrays of the same length
            if (latitude.length === longitude.length) {
                // Zip latitude and longitude arrays into coordinate pairs
                var coordinates = latitude.map((latitude, index) => [latitude, longitude[index]]);
                console.log(coordinates);

                
                routeCoords.push({ coordinates: coordinates, route: route });
            } else {
                console.error("Latitude and longitude arrays have different lengths.");
            }
        });
    })
.catch((error) => {
    console.log("Error fetching coordinates: ", error);
});

});

    export { routeCoords };
