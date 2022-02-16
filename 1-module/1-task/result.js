function factorial(num) {

	let result = 1

	if (num === 0 || num === 1) {
		return result = num
	} 
	
	if (num > 1) {
		for (let i=0; i<num; i++) {
			result *= (num - i)
		}
		return result
	}
}

console.log(factorial(5))