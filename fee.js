//  Estimates mobile money transaction fee and displays total debit amount
function estimateTransactionFee() {
  // Prompt user for amount they want to send
  const amountToSend = parseFloat(prompt("Unatuma Ngapi? (KES)"));

  // Validate input
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log(" Please enter a valid amount (greater than 0).");
    return;
  }

  // Calculate fee: 1.5% of the amount, but not less than KES 10 or more than KES 70
  const rawFee = amountToSend * 0.015;
  const fee = Math.max(10, Math.min(70, rawFee));

  const total = amountToSend + fee; // Total amount debited

  // Display transaction details
  console.log(Transaction details:);
  console.log(• Amount to send: KES ${amountToSend});
  console.log(• Transaction fee: KES ${fee});
  console.log(• Total to be debited: KES ${total});
  console.log("Send Money Securely!");

