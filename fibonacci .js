const fibonacci  = n => {
  const sequence = [1, 1]; // 1

  for (let i = 2; i <= n; i++) { // 1
    const next = sequence[i - 2] + sequence[i - 1]; // n - 1
    sequence.push(next); // n - 1
  }

  return sequence[n]; // 1
};

// T = 1 + 1 + 1 + 2 * (n - 1) = 3 + 2n - 2 = 1 + 2n = 2n = n
// O(n) -> linear time complexity

console.log(fibonacci(4));
