import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  connectFirestoreEmulator,
  query,
  getDocs,
  getDoc,
  updateDoc,
  setDoc,
  doc,
  where,
  onSnapshot,
  deleteDoc,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Your web app's Firebase configuration
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

const commuterlocation = document.getElementById("commuterlocation");
const routetoSelect = document.getElementById("routeto");
const howManyInput = document.getElementById("howmany");
const discountInput = document.getElementById("discount");
const fareDisplay = document.getElementById("fareDisplay");

const collectionRef = query(collection(db, "fare"));

let data;

onSnapshot(collectionRef, (snapshot) => {
  snapshot.forEach((doc) => {
    data = doc.data();

    console.log(data);
    console.log(data.Mapalad);
    console.log(data["Barinaut Highway"]);
  });
});

commuterlocation.addEventListener("change", calculateFare);
routetoSelect.addEventListener("change", calculateFare);
howManyInput.addEventListener("input", calculateFare);
discountInput.addEventListener("input", calculateFare);

discountInput.addEventListener("input", function () {
  const numberOfCommuters = parseInt(howManyInput.value) || 1;
  let discountValue = parseInt(discountInput.value) || 0;

  // Limit the discount input to not exceed the number of commuters
  if (discountValue > numberOfCommuters) {
    discountValue = numberOfCommuters;
    discountInput.value = discountValue;
  }
});

const DISCOUNT_RATE = 0.2;
export let fare;

function calculateFare() {
  const selectedLocation = commuterlocation.value;
  const selectedDestination = routetoSelect.value;
  const numberOfCommuters = parseInt(howManyInput.value) || 1; // Default to 1 if input is empty or invalid
  const discountValue = parseInt(discountInput.value) || 0; // Default to 0 if input is empty or invalid

  fare = data[selectedLocation][selectedDestination];
  console.log(`Computed fare before multiplying: ${fare}`);

  fare *= numberOfCommuters;
  console.log(`Total fare before discount: ${fare}`);

  fare = applyDiscounts(fare, numberOfCommuters, discountValue, DISCOUNT_RATE);

  console.log(`Test fare: ${fare}`);

  fare = Math.round(fare * 100) / 100;

  console.log(`Total fare after discount: ${fare}`);

  fareDisplay.textContent = `Fare: PHP ${fare}`;
}

function applyDiscounts(fare, numberOfCommuters, discountCount, discountRate) {
  // Limit the discount count to not exceed the number of commuters
  discountCount = Math.min(discountCount, numberOfCommuters);

  let discountedFare = fare;
  for (let i = 0; i < discountCount; i++) {
    discountedFare -= (fare / numberOfCommuters) * discountRate; // Apply discount to each discounted commuter
  }
  return discountedFare;
}