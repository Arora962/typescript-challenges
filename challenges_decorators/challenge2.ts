export {}; 

// 1. Observer Pattern for DrinkOrder

interface Observer {
  update(message: string): void;
}

class Customer implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`Customer ${this.name} received: ${message}`);
  }
}

class Inventory implements Observer {
  update(message: string): void {
    console.log(`Inventory system updated: ${message}`);
  }
}

// PromotionSystem observer
class PromotionSystem implements Observer {
  update(message: string): void {
    console.log(`Promotion System: Special offer! (${message})`);
  }
}

class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  private notifyAll(message: string): void {
    for (const o of this.observers) {
      o.update(message);
    }
  }

  serveDrink(drink: string): void {
    console.log(`\n--- Serving ${drink} ---`);
    this.notifyAll(`${drink} is now served.`);
  }
}

// Test Observer part
const order = new DrinkOrder();
order.addObserver(new Customer("Alice"));
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());   // ← added promotion system
order.serveDrink("Cappuccino");


// 2. Factory Pattern for Reports

interface IReport {
  generate(): void;
}

class PDFReport implements IReport {
  generate(): void {
    console.log("Generating PDF report…");
  }
}

class HTMLReport implements IReport {
  generate(): void {
    console.log("Generating HTML report…");
  }
}

class ReportFactory {
  static createReport(type: string): IReport {
    switch (type.toLowerCase()) {
      case "pdf":
        return new PDFReport();
      case "html":
        return new HTMLReport();
      default:
        throw new Error(`Unknown report type: ${type}`);
    }
  }
}

// Test Factory part
console.log("\n--- Report Factory Tests ---");
const pdf = ReportFactory.createReport("pdf");
pdf.generate();

const html = ReportFactory.createReport("html");
html.generate();
