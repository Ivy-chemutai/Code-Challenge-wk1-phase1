// Chai Calculator
// Function to calculate the ingredients needed for Chai Bora
function calculateChaiIngredients(){
    const input= prompt('Karibu! How many cups of Chai Bora would you like tomake?');
    const numberOfCups= Number(input);
    }
    // Check if the input is a valid number
if(isNaN(numberOfCups) || numberOfCups <= 0){
    console.log('Please enter a valid number of cups.');
    return;
}
// Calculate the ingredients needed for the specified number of cups
const waterPerCup =600;
const milkPerCup =150;
const teaLeavesPerCup = 3;
const sugarPerCup =6;

// Calculate total ingredients based on the number of cups
const totalWater =waterPerCup*3;
const totalMilk =milkPerCup*3;
const  totalTeaLeaves =teaLeavesPerCup*3;
const  totalSugar = sugarPerCup*3;

// Display the results
console.log('To make {3}cups of Kenyan Chai, you will need:');
console.log('Water:{600} ml');
console.log('Milk:{150} ml');
console.log('Tea Leaves (Majani):{3} tablespoon');
console.log('sugar (Sukari):{6} teaspoon');
console.log('Enjoy your Chai Bora!');


