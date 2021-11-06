// O(n)

/*
  const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
*/

// O(sqrt(n))
const isPrime = num => {
  for (let i = 2; i < Math.sqrt(num); i++) { // 1
    if (num % i === 0) return false; // sqrt(n)
  }
  return true; // 1
};

console.log(isPrime(32321));
