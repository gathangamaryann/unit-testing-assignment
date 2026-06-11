const {
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
} = require('./assignment');

// TESTS

describe('Q1 - sum', () => {
  it('adds two positive numbers // POSITIVE', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('adds a negative and a positive number // BOUNDARY', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  it('adds zeros // BOUNDARY', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('Q2 - isAdult', () => {
  it('returns true for age 18 // BOUNDARY', () => {
    expect(isAdult(18)).toBe(true);
  });

  it('returns true for age 25 // POSITIVE', () => {
    expect(isAdult(25)).toBe(true);
  });

  it('returns false for age 17 // NEGATIVE', () => {
    expect(isAdult(17)).toBe(false);
  });

  it('returns false for age 0 // BOUNDARY', () => {
    expect(isAdult(0)).toBe(false);
  });
});

describe('Q3 - reverseString', () => {
  it('reverses hello to olleh // POSITIVE', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('reverses QA to AQ // POSITIVE', () => {
    expect(reverseString('QA')).toBe('AQ');
  });

  it('returns empty string when input is empty // BOUNDARY', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('Q4 - qualifiesForDiscount', () => {
  // Boundary values 999/1000/1001 matter because they test the exact threshold and just one unit below and above it.
  it('returns false for 999 // NEGATIVE', () => {
    expect(qualifiesForDiscount(999)).toBe(false);
  });

  it('returns true for 1000 // BOUNDARY', () => {
    expect(qualifiesForDiscount(1000)).toBe(true);
  });

  it('returns true for 1001 // POSITIVE', () => {
    expect(qualifiesForDiscount(1001)).toBe(true);
  });
});

describe('Q5 - isValidUsername', () => {
  it('returns false for 4-char username // NEGATIVE', () => {
    expect(isValidUsername('John')).toBe(false);
  });

  it('returns true for 5-char username // BOUNDARY', () => {
    expect(isValidUsername('Emily')).toBe(true);
  });

  it('returns true for 6-char username // POSITIVE', () => {
    expect(isValidUsername('Alexis')).toBe(true);
  });
});

describe('Q6 - getGrade', () => {
  it('returns F for 59 // NEGATIVE', () => {
    expect(getGrade(59)).toBe('F');
  });

  it('returns C for 60 // BOUNDARY', () => {
    expect(getGrade(60)).toBe('C');
  });

  it('returns C for 69 // POSITIVE', () => {
    expect(getGrade(69)).toBe('C');
  });

  it('returns B for 70 // BOUNDARY', () => {
    expect(getGrade(70)).toBe('B');
  });

  it('returns B for 79 // POSITIVE', () => {
    expect(getGrade(79)).toBe('B');
  });

  it('returns A for 80 // POSITIVE', () => {
    expect(getGrade(80)).toBe('A');
  });
});

describe('Q7 - createUser', () => {
  it('creates a user object with name and age // POSITIVE', () => {
    expect(createUser('John', 25)).toEqual({ name: 'John', age: 25 });
  });
});

describe('Q8 - addToCart', () => {
  it('adds an item to an empty cart // POSITIVE', () => {
    expect(addToCart([], 'apple')).toEqual(['apple']);
  });

  it('adds a new item to an existing cart // POSITIVE', () => {
    expect(addToCart(['apple'], 'banana')).toEqual(['apple', 'banana']);
  });

  it('allows duplicate items to be added twice // BOUNDARY', () => {
    expect(addToCart(['apple'], 'apple')).toEqual(['apple', 'apple']);
  });
});

describe('Q9 - findUser', () => {
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

  it('returns the correct user when user exists // POSITIVE', () => {
    expect(findUser(users, 2)).toEqual({ id: 2, name: 'Bob' });
  });

  it('returns undefined when user does not exist // NEGATIVE', () => {
    expect(findUser(users, 3)).toBeUndefined();
  });
});

describe('Q10 - divide', () => {
  it('divides numbers correctly // POSITIVE', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('throws when dividing by zero // NEGATIVE', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});

describe('Q11 - validatePassword', () => {
  it('returns true for a valid password // POSITIVE', () => {
    expect(validatePassword('securepass')).toBe(true);
  });

  it('throws when password is too short // NEGATIVE', () => {
    expect(() => validatePassword('short')).toThrow('Password too short');
  });
});

describe('Q12 - sendWelcomeEmail', () => {
  it('calls emailService.send once with correct email // POSITIVE', () => {
    const sendMock = jest.fn();
    const emailService = { send: sendMock };
    const user = { email: 'test@example.com' };

    sendWelcomeEmail(emailService, user);

    expect(sendMock).toHaveBeenCalled();
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sendMock).toHaveBeenCalledWith('test@example.com', 'Welcome!');
  });
});

describe('Q13 - getUsers', () => {
  it('returns mocked users and calls fetchUsers once // POSITIVE', async () => {
    const fetchUsersMock = jest.fn().mockResolvedValue([{ id: 1, name: 'Alice' }]);
    const api = { fetchUsers: fetchUsersMock };

    const result = await getUsers(api);

    expect(result).toEqual([{ id: 1, name: 'Alice' }]);
    expect(fetchUsersMock).toHaveBeenCalledTimes(1);
  });
});

describe('Q14 - withdraw', () => {
  it('withdraws a valid amount from balance // POSITIVE', () => {
    expect(withdraw(500, 100)).toBe(400);
  });

  it('throws Insufficient funds when amount exceeds balance // NEGATIVE', () => {
    expect(() => withdraw(500, 600)).toThrow('Insufficient funds');
  });

  it('throws Invalid amount when amount is zero // NEGATIVE', () => {
    expect(() => withdraw(500, 0)).toThrow('Invalid amount');
  });

  it('throws Invalid amount when amount is negative // NEGATIVE', () => {
    expect(() => withdraw(500, -50)).toThrow('Invalid amount');
  });

  it('returns zero when withdrawing full balance // BOUNDARY', () => {
    expect(withdraw(500, 500)).toBe(0);
  });

  it('returns 499 when withdrawing 1 // BOUNDARY', () => {
    expect(withdraw(500, 1)).toBe(499);
  });

  it('returns 1 when withdrawing 499 // BOUNDARY', () => {
    expect(withdraw(500, 499)).toBe(1);
  });
});

describe('Q15 - transfer', () => {
  it('transfers a valid amount from balance // POSITIVE', () => {
    expect(transfer(500, 100)).toBe(400);
  });

  it('throws Minimum transfer is 10 when amount is below minimum // NEGATIVE', () => {
    expect(() => transfer(500, 9)).toThrow('Minimum transfer is 10');
  });

  it('throws Insufficient balance when amount exceeds balance // NEGATIVE', () => {
    expect(() => transfer(500, 600)).toThrow('Insufficient balance');
  });

  it('allows minimum transfer of 10 // BOUNDARY', () => {
    expect(transfer(500, 10)).toBe(490);
  });

  it('allows full balance transfer // BOUNDARY', () => {
    expect(transfer(500, 500)).toBe(0);
  });

  it('allows transfer when balance equals minimum amount // EDGE', () => {
    expect(transfer(10, 10)).toBe(0);
  });
});

describe('CHALLENGE - registerUser', () => {
  it('registers a user with valid inputs // POSITIVE', () => {
    expect(registerUser('Mary', 'mary@example.com', 18)).toEqual({
      name: 'Mary',
      email: 'mary@example.com',
      age: 18,
    });
  });

  it('throws Name required when name is missing // NEGATIVE', () => {
    expect(() => registerUser(undefined, 'mary@example.com', 20)).toThrow('Name required');
  });

  it('throws Invalid email when email has no @ // NEGATIVE', () => {
    expect(() => registerUser('Mary', 'maryexample.com', 20)).toThrow('Invalid email');
  });

  it('throws Must be 18 or older when age is under 18 // NEGATIVE', () => {
    expect(() => registerUser('Mary', 'mary@example.com', 17)).toThrow('Must be 18 or older');
  });

  it('accepts age exactly 18 // BOUNDARY', () => {
    expect(registerUser('Mary', 'mary@example.com', 18)).toEqual({
      name: 'Mary',
      email: 'mary@example.com',
      age: 18,
    });
  });

  it('throws when age is exactly 17 // BOUNDARY', () => {
    expect(() => registerUser('Mary', 'mary@example.com', 17)).toThrow('Must be 18 or older');
  });

  it('throws Name required when name is an empty string // EDGE', () => {
    expect(() => registerUser('', 'mary@example.com', 20)).toThrow('Name required');
  });

  it('accepts email as @ only because it includes @ // EDGE', () => {
    expect(registerUser('Mary', '@', 20)).toEqual({ name: 'Mary', email: '@', age: 20 });
  });

  it('throws Must be 18 or older when age is zero // EDGE', () => {
    expect(() => registerUser('Mary', 'mary@example.com', 0)).toThrow('Must be 18 or older');
  });
});
