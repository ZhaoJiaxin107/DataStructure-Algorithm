/* 
417. Pacific Atlantic Water Flow
Given an m x n matrix of non-negative integers representing 
the height of each unit cell in a continent, the "Pacific ocean" 
touches the left and top edges of the matrix and the "Atlantic ocean" 
touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from 
a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.
*/

// 1.把矩阵想象成图
// 2.从海岸线逆流而上遍历图, 所到之处就是可以流到某个大洋的坐标

// 1.新建两个矩阵, 分别记录能流到两个大洋的坐标
// 2.从海岸线, 多管齐下, 同时深度优先遍历图, 过程中填充上述矩阵
// 3.遍历两个矩阵, 找到能流到两个大洋的坐标

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
    if (!matrix || !matrix[0]) { return []; }
    const m = matrix.length;
    const n = matrix[0].length;
    const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
    const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));
    // console.log(flow1);
    // console.log(flow2);

    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
            if (
                // 保证在矩阵中
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                // 防止死循环
                !flow[nr][nc] &&
                // 保证逆流而上
                matrix[nr][nc] >= matrix[r][c]

            ) {
                dfs(nr, nc, flow);
            }

        });

    };

    // 沿着海岸线逆流而上
    for (let r = 0; r < m; r++) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }
    // 收集能流到两个大洋里的坐标
    const res = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (flow1[r][c] && flow2[r][c]) {
                res.push([r, c]);
            }
        }
    }
    return res;
};

// 时间复杂度: O(m * n)
// 空间复杂度: O(m * n) 


