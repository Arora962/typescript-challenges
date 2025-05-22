const transactions = ["checkout", "return", "checkout", "priority", "cancelled", "checkout", "return"];
type TransactionType = "checkout" | "return" | "priority" | "cancelled";
const transactionCount: Record<TransactionType, number> = {checkout: 0,return: 0,priority: 0,cancelled: 0};
for (let i = 0; i < transactions.length; i++) {
  const type = transactions[i] as TransactionType;
  transactionCount[type]++;
}
console.log("Transaction Counts:", transactionCount);

const incomingTransactions = ["checkout", "return", "checkout", "priority", "return"];
let index = 0;
while (true) {
  const current = incomingTransactions[index];
  console.log(`Processing: ${current}`);
  if (current === "priority") {
    console.log("Priority transaction received. Breaking loop.");
    break;
  }
  index++;
}

let returnQueue: string[] = ["item1", "item2"];
do {
  const item = returnQueue.shift();
  console.log(`Processing return: ${item}`);
  if (item === "item1") {
    returnQueue.push("item3");
  }
} while (returnQueue.length > 0);
let inventory: Record<string, number> = {
  apples: 20,
  bananas: 15,
  oranges: 10
};
for (let item in inventory) {
  inventory[item] = 0;
}
console.log("Inventory after reset:", inventory);

const visitors = ["Alice", "Bob", "Charlie", "Diana"];
for (let i = visitors.length - 1; i >= 0; i--) {
  console.log(`Visitor: ${visitors[i]}`);
}
