function processTransaction(amount: number, description: string | undefined, isCredit: boolean): void 
{
  if (amount < 0)
  {
    throw new Error("Transaction amount cannot be negative.");
  }

  const desc = description ?? "No description provided";

  const type = isCredit ? "Credit" : "Debit";

  console.log("Transaction Summary:");
  console.log(`Type: ${type}`);
  console.log(`Amount: $${amount}`);
  console.log(`Description: ${desc}`);
}

processTransaction(30000, "Grocery shopping", true);
processTransaction(16000, "Books", false);
//processTransaction(-50, "Invalid payment", true); //Uncommenting this line will throw an error
