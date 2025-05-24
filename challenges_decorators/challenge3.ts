/// <reference lib="es2015" />
export {}; 

// 1. PaymentGateway interface and implementations

interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`[BankTransfer] Processing payment of $${amount} via bank transfer...`);
    await new Promise(res => setTimeout(res, 500));
    console.log(`[BankTransfer] Payment of $${amount} succeeded.`);
    return true;
  }
}

class MockFailureGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`[MockFailure] Simulating failure for payment of $${amount}.`);
    await new Promise(res => setTimeout(res, 200));
    return false;
  }
}

class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    try {
      const success = await this.gateway.processPayment(amount);
      if (success) {
        console.log("Payment succeeded.");
      } else {
        console.error("Payment failed. Please try again or use another method.");
      }
    } catch (err: any) {
      console.error(`Error during payment: ${err.message || err}`);
    }
  }
}

// 2. EmailService interface and implementations

interface EmailService {
  sendEmail(to: string, subject: string, body: string): Promise<void>;
}

class SmtpEmailService implements EmailService {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    console.log(`[SMTP] Sending email to ${to}`);
    console.log(`        Subject: ${subject}`);
    console.log(`        Body: ${body}`);
    await new Promise(res => setTimeout(res, 300));
    console.log("[SMTP] Email sent successfully.");
  }
}

class MockEmailService implements EmailService {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    console.log(`[MOCK SMTP] Pretending to send email to ${to}`);
  }
}

class NotificationSender {
  constructor(private emailService: EmailService) {}

  async notifyUser(email: string, message: string): Promise<void> {
    const subject = "Notification from Our App";
    const body = `Hello! ${message}`;
    await this.emailService.sendEmail(email, subject, body);
  }
}

// ====== Demo ======

async function main() {
  console.log("\n--- PaymentProcessor with BankTransferGateway ---");
  await new PaymentProcessor(new BankTransferGateway()).pay(150);

  console.log("\n--- PaymentProcessor with MockFailureGateway ---");
  await new PaymentProcessor(new MockFailureGateway()).pay(75);

  console.log("\n--- NotificationSender with SmtpEmailService ---");
  await new NotificationSender(new SmtpEmailService()).notifyUser("user@domain.com", "Your order has shipped!");

  console.log("\n--- NotificationSender with MockEmailService ---");
  await new NotificationSender(new MockEmailService()).notifyUser("test@domain.com", "This is a test notification.");
}

main().catch(console.error);
