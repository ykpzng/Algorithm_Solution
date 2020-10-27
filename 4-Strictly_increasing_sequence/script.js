
almostIncreasingSequence = sequence => {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
    }
  }
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 2, 3])); //true
console.log(almostIncreasingSequence([5, 4, 3, 2, 1])); //false
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6])); //false
console.log(almostIncreasingSequence([1, 2, 1, 2]));  //false
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30]));   //false



