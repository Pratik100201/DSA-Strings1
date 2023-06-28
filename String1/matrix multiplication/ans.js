function multiplySparseMatrices(mat1, mat2) {
  const result = [];
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;

  for (let i = 0; i < m; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = 0;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < k; j++) {
      if (mat1[i][j] !== 0) {
        for (let l = 0; l < n; l++) {
          result[i][l] += mat1[i][j] * mat2[j][l];
        }
      }
    }
  }

  return result;
}
