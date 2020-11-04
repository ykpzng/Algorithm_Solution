

let matArr = [
  [0, 1, 1, 2],
  [1, 5, 0, 0],
  [2, 0, 3, 3]];

// My Solution

function matrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && i < matrix.length - 1) {
        matrix[i + 1][j] = 0;
        continue;
      }
      sum += matrix[i][j];
    }
  }
  return sum;
}

console.log(matrixElementsSum(matArr));


// OR 

function matrixElementsSum(matrix) {
  for (var r = 0, j = 0; j < matrix[0].length; j++) {
    for (var i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break;
      else r += matrix[i][j];
    }
  }
  return r;
}


// OR

function matrixElementsSum(matrix) {
  var total = 0;

  for (var i = 0; i < matrix[0].length; i++) {

    for (var j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        break;
      }
      total += matrix[j][i];
    }
  }

  return total;
}