function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both arguments must be numbers');
  }

  if (denominator === 0) {
    throw new Error('Denominator cannot be 0');
  }

  return numerator / denominator;
}

// Testing
try {
  console.log(divide(10, 2)); // 5
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}

try {
  console.log(divide(7, 0)); // Denominator cannot be 0
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}

try {
  console.log(divide('qwe', 3)); // Both arguments must be numbers
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}