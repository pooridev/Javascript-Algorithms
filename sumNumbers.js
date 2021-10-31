// O(n)
const sumNumbers = numbers => {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
};

const sum = sumNumbers([10, 20]);
console.log(sum);
