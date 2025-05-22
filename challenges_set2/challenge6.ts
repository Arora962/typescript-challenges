type Member = {
  name: string;
  email?: string;
};
function displayMember(member: Member): void {
  console.log(`Name: ${member.name}`);
  if (member.email) {
    console.log(`Email: ${member.email}`);
  } else {
    console.log("No email provided.");
  }
}
const member1: Member = { name: "Jane Doe", email: "jane@example.com" };
const member2: Member = { name: "John Smith" };
displayMember(member1);
displayMember(member2);

function calculateFines(...fines: number[]): number {
  return fines.reduce((sum, fine) => sum + fine, 0);
}
const totalFines = calculateFines(5, 10, 2.5);
console.log("Total fines:", totalFines);

function computeMembershipFee(baseFee: number, discount: number = 0.1): number {
  return baseFee * (1 - discount);
}
const defaultDiscountFee = computeMembershipFee(100);       
const twentyPercentFee = computeMembershipFee(100, 0.2);    
console.log("Fee with default discount:", defaultDiscountFee);
console.log("Fee with 20% discount:", twentyPercentFee);

function vipGreet(name: string): string {
  return `Welcome VIP ${name}!`;
}
function consoleGreet(name: string): void {
  console.log(`Hello, ${name}. Enjoy your visit.`);
}
const Visitors = ["Alice", "Bob"];
Visitors.forEach(name => {
  console.log(vipGreet(name));
  consoleGreet(name);
});

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(7));  

type Book = { title: string };
const books: Book[] = [
  { title: "Harry Potter" },
  { title: "Bhagavad Gita" },
  { title: "Wings of Fire" }
];
function generateTextReport(data: Book[]): string {
  return data.map((book, index) => `${index + 1}. ${book.title}`).join('\n');
}
function generateJSONReport(data: Book[]): string {
  return JSON.stringify(data, null, 2);
}
console.log("Text Report:\n" + generateTextReport(books));
console.log("JSON Report:\n" + generateJSONReport(books));
