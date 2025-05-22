type CustomerID = string;

type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled
}

type ProcessOrder = (orderId: number, callback: (status: OrderStatus) => void) => void;

const processOrder: ProcessOrder = (orderId, callback) => {
  console.log(`Processing order #${orderId}`);
  const status = OrderStatus.Shipped; 
  callback(status);
};

type Container<T> = {
  value: T;
};

const customer: Customer = {
  id: "CUST12345",
  name: "Kriti Arora",
  email: "kriarora10@gmail.com"
};

const customerContainer: Container<Customer> = {
  value: customer
};

processOrder(101, (status) => {
  console.log(`Order Status: ${OrderStatus[status]}`);
});

console.log("Customer in container:", customerContainer);