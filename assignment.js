function sum(a, b) {
  return a + b;
}

function isAdult(age) {
  return age >= 18;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function qualifiesForDiscount(amount) {
  return amount >= 1000;
}

function isValidUsername(username) {
  return username.length >= 5;
}

function getGrade(score) {
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  return 'F';
}

function createUser(name, age) {
  return { name, age };
}

function addToCart(cart, item) {
  return [...cart, item];
}

function findUser(users, id) {
  return users.find(u => u.id === id);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function validatePassword(password) {
  if (password.length < 8) {
    throw new Error('Password too short');
  }
  return true;
}

function sendWelcomeEmail(emailService, user) {
  emailService.send(user.email, 'Welcome!');
}

async function getUsers(api) {
  return await api.fetchUsers();
}

function withdraw(balance, amount) {
  if (amount <= 0) {
    throw new Error('Invalid amount');
  }
  if (amount > balance) {
    throw new Error('Insufficient funds');
  }
  return balance - amount;
}

function transfer(balance, amount) {
  if (amount < 10) {
    throw new Error('Minimum transfer is 10');
  }
  if (amount > balance) {
    throw new Error('Insufficient balance');
  }
  return balance - amount;
}

function registerUser(name, email, age) {
  if (!name) {
    throw new Error('Name required');
  }
  if (!email || !email.includes('@')) {
    throw new Error('Invalid email');
  }
  if (age < 18) {
    throw new Error('Must be 18 or older');
  }
  return { name, email, age };
}

module.exports = {
  sum,
  isAdult,
  reverseString,
  qualifiesForDiscount,
  isValidUsername,
  getGrade,
  createUser,
  addToCart,
  findUser,
  divide,
  validatePassword,
  sendWelcomeEmail,
  getUsers,
  withdraw,
  transfer,
  registerUser,
};
