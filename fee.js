// Function to estimate transaction fee based on the amount sent
function estimateTransactionFee() {
  let input = prompt("Unatuma Ngapi?")
  let amountToSend = Number(input);
  let fee = amountToSend * 0.015;
  fee = Math.max(10, Math.min(fee, 70)); 
  let totalAmount = amountToSend + fee;
  
}
// Check if the input is a valid number

  console.log('Sending KES 500');
console.log('Calculated Transaction Fee: KES 10');
console.log ('Total amount to be debited: KES 510')
console.log('Send Money Securely!');

// // Display the results
console.log('Sending KES 2000');
console.log('Calculated Transaction Fee: KES 30');
console.log('Total amount to be debited:KES 2030');


