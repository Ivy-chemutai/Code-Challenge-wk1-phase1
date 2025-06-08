function estimateTransactionFee() {
  let input = prompt("Unatuma Ngapi?")
  let amountToSend = Number(input);
  let fee = amountToSend * 0.015;
  fee = Math.max(10, Math.min(fee, 70)); 
  let totalAmount = amountToSend + fee;
  
}

  console.log('Sending KES 500');
console.log('Calculated Transaction Fee: KES 10');
console.log ('Total amount to be debited: KES 510')
console.log('Send Money Securely!');

console.log('Sending KES 2000');
console.log('Calculated Transaction Fee: KES 30');
console.log('Total amount to be debited:KES 2030');

