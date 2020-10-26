

function checkPalindrome(str) {
  str1 = str.split('').reverse().join('');
  return str === str1;

}

console.log(checkPalindrome('racecar'));  //true
console.log(checkPalindrome('scary'));    //false


// ES6 version solution

checkPalindrome1 = (str) => str.split('').reverse().join('') == str;

console.log(checkPalindrome1('racecar'));  //true
console.log(checkPalindrome1('scary'));    //false


// OR with for loop

function checkPalindrome2(str) {
  let len = str.length - 1;
  let newStr = '';
  for (let i = len; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr === str;
}

console.log(checkPalindrome2('racecar'));  //true
console.log(checkPalindrome2('scary'));    //false