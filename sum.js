function sum (a, b) {
    return a + b;
}

/**
 * Calcula el factorial de un número.
 * @param {number} n - El número para calcular el factorial.
 * @returns {number} El factorial de n, o NaN si n es negativo.
 */
function factorial(n) {
  if (n < 0) {
    return NaN; // El factorial no está definido para números negativos.
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Calcula el n-ésimo número de la secuencia de Fibonacci.
 * @param {number} n - El índice del número de Fibonacci a calcular (comenzando en 0).
 * @returns {number} El n-ésimo número de Fibonacci, o NaN si n es negativo.
 */
function fibonacci(n) {
  if (n < 0) {
    return NaN;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = {  sum,  factorial,  fibonacci};