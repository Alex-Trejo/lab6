const { sum, factorial, fibonacci } = require('./math');

describe('sum', () => {
  test('Suma de 1 + 2 debe dar 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Suma de -5 + 10 debe dar 5', () => {
    expect(sum(-5, 10)).toBe(5);
  });
});


// Pruebas para la función factorial
describe('factorial', () => {
  test('Factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Factorial de 1 debe ser 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('Factorial de un número negativo debe ser NaN', () => {
    expect(factorial(-10)).toBeNaN();
  });
});

// Pruebas para la función fibonacci
describe('fibonacci', () => {
  test('El número de Fibonacci en la posición 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('El número de Fibonacci en la posición 1 debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('El número de Fibonacci en la posición 7 debe ser 13', () => {
    // Secuencia: 0, 1, 1, 2, 3, 5, 8, 13
    expect(fibonacci(7)).toBe(13);
  });

  test('El número de Fibonacci en la posición 10 debe ser 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('Fibonacci de un número negativo debe ser NaN', () => {
    expect(fibonacci(-5)).toBeNaN();
  });
});