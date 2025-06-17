//  Calculates ingredients needed for Kenyan chai based on user input
function  calculateChaiIngredients() {
  // Prompt user for the desired number of cups
  const numberOfCups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"));

  // Validate input
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log(" Please enter a valid number of cups (greater than 0).");
    return;
  }

  // Each cup requires:
  const water = numberOfCups * 200;     // 200 ml water per cup
  const milk = numberOfCups * 50;       // 50 ml milk per cup
  const teaLeaves = numberOfCups;       // 1 tablespoon tea leaves per cup
  const sugar = numberOfCups * 2;       // 2 teaspoons sugar per cup

  // Display the calculated ingredients
  console.log(To make ${numberOfCups} cups of Kenyan Chai, you will need:);
  console.log(• Water: ${water} ml);
  console.log(• Milk: ${milk} ml);
  console.log(• Tea Leaves (Majani): ${teaLeaves} tablespoons);
  console.log(• Sugar (Sukari): ${sugar} teaspoons);
}
