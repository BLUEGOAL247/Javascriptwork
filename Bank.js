const account = {
  owner: "Your Name",
  balance: 5000,
  pin: "1234",

  deposit(amount) {
    this.balance += amount;
    return `New balance is ₦${this.balance}`;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance -= amount;
    return `New balance is ₦${this.balance}`;
  },

  checkBalance() {
    return `Balance is ₦${this.balance}`;
  }
};

// Test
console.log(account.deposit(2000));  
console.log(account.withdraw(1000)); 
console.log(account.withdraw(10000)); 
console.log(account.checkBalance()); 



const order = {
  orderId: 101,
  customer: {
    name: "Tunde",
    email: "tunde@gmail.com",
    address: "Ibadan, Oyo"
  },
  product: {
    name: "Shoe",
    price: 10000,
    quantity: 2
  },
  isDelivered: false,

  totalPrice() {
    return this.product.price * this.product.quantity;
  },

  summary() {
    return `Order ${this.orderId}: ${this.customer.name} ordered ${this.product.quantity}x ${this.product.name} = ₦${this.totalPrice()}`;
  }
};


const { name } = order.customer;
console.log(name); // Tunde

console.log(order.totalPrice()); // 20000
console.log(order.summary()); 


const book = {
  title: "JS for Beginners",
  author: "John Doe",
  pages: 200,
  isRead: false,

  readBook() {
    this.isRead = true;
  },

  addInfo(publisher, year) {
    Object.assign(this, { publisher, year });
  }
};

// Test
book.readBook();
console.log(book.isRead);
book.addInfo("LearnCode Press", 2024);
console.log(book);



