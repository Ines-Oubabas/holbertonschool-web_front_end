function countPrimeNumbers() {
  let count = 0;

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}

console.log("Start of script");

setTimeout(() => {
  const start = performance.now();

  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }

  const end = performance.now();
  console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
}, 0);

console.log("End of script");
