let score: number = 96;
console.log("Global score:", score);

if (true) {
  let score: number = 92;
  console.log("Inside block score:", score);

  //let score: number = 60; //Uncommenting this will cause an error
}

console.log("Outside block score:", score);

const COUNTRY = "India";
console.log("Favorite country:", COUNTRY);

//COUNTRY = "Canada"; // Uncommenting this will cause an error