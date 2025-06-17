// chai.js
// Calculates ingredients needed for Kenyan chai based on user input
function calculateChaiIngredients() {
  // Prompt the user for the number of cups
  const numberOfCups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"));

  // Check if the input is a valid positive number
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups (greater than 0).\n");
    return;
  }

  // Ingredient calculations per cup
  const water = numberOfCups * 200;       // 200 ml water per cup
  const milk = numberOfCups * 50;         // 50 ml milk per cup
  const teaLeaves = numberOfCups;         // 1 tablespoon per cup
  const sugar = numberOfCups * 2;         // 2 teaspoons per cup

  // Output the required ingredients
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`- Water: ${water} ml`);
  console.log(`- Milk: ${milk} ml`);
  console.log(`- Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`- Sugar (Sukari): ${sugar} teaspoons\n`);
}

