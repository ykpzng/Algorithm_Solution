
function Go(num) {
  return '-'.repeat(num);
}

console.log(Go(5));
console.log(Go(20));
console.log(Go(62));

// OR

function Go1(num) {
  return num > 0 && num < 61 ? '-'.repeat(num) : 'Log in 1-60';
}

console.log(Go1(5));
console.log(Go1(20));
console.log(Go1(62));

//ES6 version Solution

Go2 = num => '-'.repeat(num);

console.log(Go2(5));
console.log(Go2(20));
console.log(Go2(60));