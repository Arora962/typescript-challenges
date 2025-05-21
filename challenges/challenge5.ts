let answers: { [key: string]: any } = {};

function recordAnswer(questionId: string, answer: any): void {
  answers[questionId] = answer;
}

recordAnswer("q1", "Yes, I agree.");          
recordAnswer("q2", 96);                       
recordAnswer("q3", ["Red", "Green", "Blue"]); 
recordAnswer("q4", { name: "Kriti Arora", age: 19 });
recordAnswer("q5", true);

console.log("Recorded Answers:",answers);