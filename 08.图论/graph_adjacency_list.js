/* 基于邻接表实现的无向无权图类 */
class GraphAdjacencyList {
  /* 构造方法 */
  constructor(edges) {
    this.adjacencyList = new Map();
    // 添加所有顶点和边
    for (const edge of edges) {
      this.addVertex(edge[0]);
      this.addVertex(edge[1]);
      this.addEdge(edge[0], edge[1]);
    }
  }

  /* 添加顶点 */
  addVertex(cur) {
    if (this.adjacencyList.has(cur)) return;
    // 在邻接表中添加一个新链表
    this.adjacencyList.set(cur, []);
  }

  /* 添加边 */
  addEdge(vet1, vet2) {
    if (
      !this.adjacencyList.has(vet1) ||
      !this.adjacencyList.has(vet2) ||
      vet1 === vet2
    )
      throw new Error("Illegal Argument Exception");
    // 添加边 vet1 - vet2
    this.adjacencyList.get(vet1).push(vet2);
    this.adjacencyList.get(vet2).push(vet1);
  }

  /* 删除顶点 */
  removeVertex(cur) {
    if (!this.adjacencyList.has(cur))
      throw new Error("Illegal Argument Exception");
    // 在邻接表中删除顶点 cur 对应的链表
    this.adjacencyList.delete(cur);
    // 遍历其他顶点的链表，删除所有包含 cur 的边
    for (const arr of this.adjacencyList.values()) {
      const index = arr.indexOf(cur);
      if (index > -1) arr.splice(index, 1);
    }
  }

  /* 删除边 */
  removeEdge(vet1, vet2) {
    if (
      !this.adjacencyList.has(vet1) ||
      !this.adjacencyList.has(vet2) ||
      vet1 === vet2
    )
      throw new Error("Illegal Argument Exception");
    // 删除边 vet1 - vet2
    this.adjacencyList
      .get(vet1)
      .splice(this.adjacencyList.get(vet1).indexOf(vet2), 1);
    this.adjacencyList
      .get(vet2)
      .splice(this.adjacencyList.get(vet2).indexOf(vet1), 1);
  }

  /* BFS */
  bfsSearch(vertex) {
    if (vertex == null || vertex == "") return [];
    const queue = [vertex],
      result = [],
      visited = new Set(); // 哈希表，用于记录已被访问过的顶点
    visited.add(vertex);
    while (queue.length) {
      const cur = queue.shift(); // 队首顶点出队
      result.push(cur);
      // 遍历该顶点的所有邻接顶点
      for (const adjacency of this.adjacencyList.get(cur) || []) {
        if (visited.has(adjacency)) continue; // 跳过已被访问的顶点
        queue.push(adjacency); // 只入队未访问的顶点
        visited.add(adjacency); // 标记该顶点已被访问
      }
    }
    // 返回顶点遍历序列
    return result;
  }

  /* DFS */
  dfsSearch(vertex, visited = new Set(), result = []) {
    if (vertex == null || vertex == "") return result;
    visited.add(vertex); // 标记该顶点已被访问
    result.push(vertex);
    for (const adjacency of this.adjacencyList.get(vertex)) {
      if (visited.has(adjacency)) continue; // 跳过已被访问的顶点
      this.dfsSearch(adjacency, visited, result); // // 递归访问邻接顶点
    }
    return result;
  }

  /* 获取顶点数量 */
  size() {
    return this.adjacencyList.size;
  }

  /* 打印邻接表 */
  print() {
    console.log("邻接表 =");
    for (const [key, value] of this.adjacencyList) {
      console.log(key + ": " + value.join());
    }
  }
}

console.log("初始化");
const graphAdjList = new GraphAdjacencyList([
  [1, 3],
  [1, 5],
  [3, 2],
  [2, 5],
  [2, 4],
  [4, 5],
]);
graphAdjList.print();

console.log("添加边");
graphAdjList.addEdge(1, 2);
graphAdjList.print();

console.log("删除边");
graphAdjList.removeEdge(1, 3);
graphAdjList.print();

console.log("添加顶点");
graphAdjList.addVertex(6);
graphAdjList.print();

console.log("删除顶点");
graphAdjList.removeVertex(3);
graphAdjList.print();

console.log("BFS");
console.log(graphAdjList.bfsSearch(1));

console.log("DFS");
console.log(graphAdjList.dfsSearch(1));
