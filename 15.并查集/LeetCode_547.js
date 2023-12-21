// https://leetcode-cn.com/problems/friend-circles/

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
	if (!M || !M.length) return 0;
	var n = M.length,
		union = new UnionFind(n);
	for (var i = 0; i < n; i++) {
		for (var j = i; j < n; j++) {
			if (i !== j && M[i][j] == 1) 
				union.union(i, j);
		}
	}
	return union.count;
};

function UnionFind (n) {
	this.parent = [];
	this.count = n;
	for (var i = 0; i < n; i++) 
		this.parent[i] = i;
}

UnionFind.prototype.find = function (i) {
	var root = i;
	while (this.parent[root] !== root) 
		root = this.parent[root];
	while (i != this.parent[i]) {
		var tmp = i;
		i = this.parent[i];
		this.parent[tmp] = root;
	}
	return root;
}

UnionFind.prototype.union = function (i, j) {
	var rootI = this.find(i),
			rootJ = this.find(j);
	if (rootI === rootJ) return;
	if (rootI < rootJ) 
		this.parent[rootJ] = rootI;
	else 
		this.parent[rootI] = rootJ;
	this.count--;
}

var res = findCircleNum([
	[1, 0, 0, 1],
	[0, 1, 1, 0],
	[0, 1, 1, 1],
	[1, 0, 1, 1]]);
console.log(res); // 1
var res = findCircleNum([
	[1, 1, 0],
	[1, 1, 0],
	[0, 0, 1]
]);
console.log(res); // 2
var res = findCircleNum([
	[1, 1, 0],
	[1, 1, 1],
	[0, 1, 1]
]);
console.log(res); // 1