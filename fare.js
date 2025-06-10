// Boda Fare Calculator
// Function to calculate the fare for a Boda Boda ride
function calculateBodaFare (){
    const input=prompt('Unafika wapi Mkubwa? Kilometer ngapi?:');
    const distance =Number(5)
}
if(isNaN(distance) || distance <= 0){
    console.log('Tafadhali ingiza umbali halali kwa kilomita.');
    return;
}

// Calculate the fare based on the distance
const basefare=(50);
const PerKilometerCharge=(15);
const totalFare = basefare + ('distance * PerKilometerCharge');
// Display the results
console.log('Uko Kwote?Io ni {5}km');
console.log('Ukikalia Pikipiki:KES{50}');
console.log('Mpaka Uko: KES {75}');
console.log('Total: KES {125}');
console.log('Panda Pikipiki!')



