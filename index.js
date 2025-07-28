
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  

  const account = {
    balance: 0,
    transactions: [],
    lastId: 1,
  
  
    createTransaction(amount, type) {
      return {
        id: this.lastId++,
        type,
        amount
      };
    },
  
  
    deposit(amount) {
      if (amount <= 0) {
        console.log("Сума повинна бути більшою за 0.");
        return;
      }
  
      this.balance += amount;
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
      console.log(`Поповнено на ${amount} грн. Поточний баланс: ${this.balance} грн`);
    },
  
    
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Сума повинна бути більшою за 0.");
        return;
      }
  
      if (amount > this.balance) {
        console.log("❌ Недостатньо коштів на рахунку.");
        return;
      }
  
      this.balance -= amount;
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      console.log(`Знято ${amount} грн. Поточний баланс: ${this.balance} грн`);
    },
  
    
    getBalance() {
      console.log(`Поточний баланс: ${this.balance} грн`);
      return this.balance;
    },
  
    
    getTransactionDetails(id) {
      const transaction = this.transactions.find(({ id: transactionId }) => transactionId === id);
      if (transaction) {
        console.log("Знайдена транзакція:", transaction);
        return transaction;
      } else {
        console.log("Транзакцію не знайдено.");
        return null;
      }
    },
  
    
    getTransactionTotal(type) {
      const total = this.transactions
        .filter(({ type: t }) => t === type)
        .reduce((sum, { amount }) => sum + amount, 0);
      console.log(`Сума транзакцій типу "${type}": ${total} грн`);
      return total;
    },
  };
  