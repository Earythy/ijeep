const commuterlocation = document.getElementById("commuterlocation");
const routetoSelect = document.getElementById("routeto");
const howManyInput = document.getElementById("howmany");
const fareDisplay = document.getElementById("fareDisplay");

commuterlocation.addEventListener("change", calculateFare);
routetoSelect.addEventListener("change", calculateFare);
howManyInput.addEventListener("input", calculateFare);

function calculateFare() {
  const selectedLocation = commuterlocation.value;
  const selectedDestination = routetoSelect.value;
  const numberOfCommuters = parseInt(howManyInput.value) || 1; // Default to 1 if input is empty or invalid

  console.log(commuterlocation.value);
  let fare = 0;

  // Use switch to determine the fare based on selected route
  switch (selectedLocation) {
    case "City Proper":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
      break;
    case "MSU-IIT":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
      break;
    case "Tambo Gerona":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
      break;
    case "Barinaut High Way":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
      break;
    case "Valderama":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
      break;
    case "St. Felomina":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
      break;
    case "Kiwalan":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
    case "Pilmico":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
    case "Tagibo":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
    case "Dalipuga Crossing Kalubihon":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
    case "Dalipuga Proper":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
    case "Paitan":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
    case "Mapalad":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
    case "Boundary Lugait/Iligan":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
    case "Boundary Lugait to Tagibo":
      if (selectedDestination === "City Proper") {
        fare = 10;
      } else if (selectedDestination === "MSU-IIT") {
        fare = 10;
      } else if (selectedDestination === "Traffic Light Tambo") {
        fare = 15;
      } else if (selectedDestination === "Tambo Gerona") {
        fare = 20;
      } else if (selectedDestination === "Barinaut High Way") {
        fare = 25;
      } else if (selectedDestination === "Valderama") {
        fare = 30;
      } else if (selectedDestination === "St. Felomina") {
        fare = 35;
      } else if (selectedDestination === "Kiwalan") {
        fare = 40;
      } else if (selectedDestination === "Pilmico") {
        fare = 45;
      } else if (selectedDestination === "Tagibo") {
        fare = 50;
      } else if (selectedDestination === "Dalipuga Crossing Kalubihon") {
        fare = 55;
      } else if (selectedDestination === "Dalipuga Proper") {
        fare = 60;
      } else if (selectedDestination === "Paitan") {
        fare = 65;
      } else if (selectedDestination === "Mapalad") {
        fare = 70;
      } else if (selectedDestination === "Boundary Lugait/Iligan") {
        fare = 75;
      } else if (selectedDestination === "Boundary Lugait to Tagibo") {
        fare = 80;
      }
      console.log(`Computed fare before multiplying: ${fare}`);

      fare *= numberOfCommuters;
      console.log(`Total fare: ${fare}`);

      fareDisplay.textContent = `Fare: PHP ${fare}`;
    // Add more cases for other routes with specific destinations
  }
}
