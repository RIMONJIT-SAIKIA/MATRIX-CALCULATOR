
function parseMatrix(id) {
  return document.getElementById(id).value
    .trim()
    .split("\n")
    .map(row => row.trim().split(" ").map(Number));
}


function showResult(matrix) {
  document.getElementById("result").textContent = 
    matrix.map(row => row.join(" ")).join("\n");
}


function addMatrices(A, B) {
  if (A.length !== B.length || A[0].length !== B[0].length) {
    return "Matrix sizes must be same for addition.";
  }
  return A.map((row, i) => row.map((val, j) => val + B[i][j]));
}

function subMatrices(A, B) {
  if (A.length !== B.length || A[0].length !== B[0].length) {
    return "Matrix sizes must be same for subtraction.";
  }
  return A.map((row, i) => row.map((val, j) => val - B[i][j]));
}

function multiplyMatrices(A, B) {
  if (A[0].length !== B.length) {
    return "Number of columns of A must equal rows of B.";
  }
  let result = Array.from({ length: A.length }, () => Array(B[0].length).fill(0));
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
      for (let k = 0; k < A[0].length; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return result;
}


function calculate(type) {
  let A = parseMatrix("matrixA");
  let B = parseMatrix("matrixB");
  let result;

  if (type === "add") result = addMatrices(A, B);
  else if (type === "sub") result = subMatrices(A, B);
  else if (type === "mul") result = multiplyMatrices(A, B);

  if (typeof result === "string") {
    document.getElementById("result").textContent = "Error: " + result;
  } else {
    showResult(result);
  }
}