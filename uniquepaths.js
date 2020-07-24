//Objective is to find the number of unique paths to the bottom right corner
//of a mxn matrix, assuming we start at the top left corner

let m = 7, n = 3


//O(m*n) solution where m and n are the sizes of the matrix
let dp = new Array(m).fill(1).map(() => new Array(n).fill(1))
    
//The number of unique paths to a certain tile is the number of paths
//from the top and left elements
for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
}

return dp[m - 1][n - 1]