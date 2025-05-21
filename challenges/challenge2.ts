let favoriteFruit: string = "Mango";
console.log("My favorite fruit is " + favoriteFruit);

function doubleValue(num: number): void 
{
  console.log("Double is: " + (num * 2));
}
doubleValue(7);

class Person 
{
  name: string;

  constructor(name: string) 
  {
    this.name = name;
  }

  sayHello(): void 
  {
    console.log("Hello! My name is " + this.name);
  }
}

const person1 = new Person("Alex");
person1.sayHello();
