//  Calculates and displays the cost of a boda boda ride based on the distance
function calculateBodaFare() {
  // Prompt user to enter trip distance in kilometers
  const distanceInKm = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?"));

  // Validate input
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log(" Please enter a valid distance (greater than 0 km).");
    return;
  }

  const baseFare = 50;                   // Flat base charge
  const chargePerKm = 15;                // Per km rate
  const distanceCharge = distanceInKm * chargePerKm; // Additional based on distance
  const totalFare = baseFare + distanceCharge;       // Total fare calculation

  // Display the fare breakdown
  console.log(Ride details:);
  console.log(• Distance: ${distanceInKm} km);
  console.log(• Base fare: KES ${baseFare});
  console.log(• Distance charge (@ KES ${chargePerKm}/km): KES ${distanceCharge});
  console.log(• Total fare: KES ${totalFare});
  console.log(" Panda Pikipiki!");
}



