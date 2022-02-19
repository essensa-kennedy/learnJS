Array.prototype.filterRange = function (a, b) {
	const result = this.filter(item => ((item >= a) && (item <= b)))
	return result
}

let arr = [5, 3, 8, 1, 2, 4];

console.log(arr.filterRange(1, 7))

