import "reflect-metadata";

class Drone {
  constructor(public id: string) {}

  deliverPackage(destination: string) {
    console.log(`Drone ${this.id} delivering package to ${destination}`);
  }
}

function Log(
  target: any,
  context: ClassMethodDecoratorContext
) {
  const original = target;
  return function (...args: any[]) {
    console.log(`[LOG] ${String(context.name)} called with:`, args);
    return original.apply(this, args);
  };
}

class DeliveryDrone extends Drone {
  @Log
  deliverPackage(destination: string) {
    return super.deliverPackage(destination);
  }
}

// Test
const d = new DeliveryDrone("DR-123");
d.deliverPackage("Warehouse B");

//Implement a parameter decorator @ValidateEmail that could be used to mark a method parameter for email validation.

import "reflect-metadata";

function ValidateEmail(
  target: any,
  context: ClassMethodDecoratorContext
) {
  return function (...args: any[]) {
    const email = args[0];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== "string" || !emailRegex.test(email)) {
      throw new Error(`Invalid email: ${email}`);
    }
    return target.apply(this, args);
  };
}

class UserService {
  @ValidateEmail
  sendWelcome(email: string) {
    console.log(`Welcome email sent to ${email}`);
  }
}

// Test
const service = new UserService();
service.sendWelcome("test@example.com"); 