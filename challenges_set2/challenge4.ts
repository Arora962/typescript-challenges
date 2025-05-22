function checkSign(num: number): void {
  if (num > 0) {
    console.log("The number is positive.");
  }
}

function evenOrOdd(num: number): void {
  if (num % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}

function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function provideFeedback(grade: string): void {
  switch (grade) {
    case "A":
      console.log("Excellent work!");
      break;
    case "B":
      console.log("Good job.");
      break;
    case "C":
      console.log("You passed, but there's room for improvement.");
      break;
    case "D":
      console.log("Consider reviewing the material.");
      break;
    case "F":
      console.log("You need to retake the course.");
      break;
    default:
      console.log("Invalid grade provided.");
  }
}

checkSign(10);        
evenOrOdd(7);          
const grade = getGrade(92);
console.log(`Your grade is: ${grade}`);  
provideFeedback(grade);      
