/*
Clone Graph

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
*/

// 1.拷贝所有节点
// 2.拷贝所有的边

// 1.深度或广度优先遍历所有节点
// 2.拷贝所有的节点, 存储起来
// 3.将拷贝的节点, 按照原图的连接方法进行拼接


/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return;
    const visited = new Map();
    const dfs = (n) => {
        // console.log(n.val);
        const nCopy = new Node(n.val);
        visited.set(n, nCopy);
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                dfs(ne);
            }
            nCopy.neighbors.push(visited.get(ne));
        });
    };
    dfs(node);
    return visited.get(node);
};

// 时间复杂度: O(n), 因为深度优先遍历访问了图中的所有节点
// 空间复杂度: O(n), 因为有Map的数据结构, 里面可能会存储所有的节点

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return;
    const visited = new Map();
    visited.set(node, new Node(node.val));
    const q = [node];
    while (q.length) {
        const n = q.shift();
        // console.log(n.val);
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                q.push(ne);
                visited.set(ne, new Node(ne.val));
            }
            visited.get(n).neighbors.push(visited.get(ne));
        });
    }
    return visited.get(node);
};

// 时间复杂度: O(n) n为所有节点
// 空间复杂度: O(n) n为所有节点
