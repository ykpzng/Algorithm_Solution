
function countdown(start) {
  let arr = [];
  for (let i = start; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}

console.log(countdown(5));
console.log(countdown(0));
console.log(countdown(12));


// ES6 version Solution

countdown1 = start => {
  let arr = [];
  for (let i = start; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}

console.log(countdown1(5));
console.log(countdown1(0));
console.log(countdown1(12));