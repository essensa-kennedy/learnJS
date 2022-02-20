const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax (str) {

	let result = {
		min: 0,
		max: 0,
	}

	array = str.split(' ').filter(element => !isNaN(Number(element)))

	array.forEach(element => {
		element > result.max ? result.max = +element : result.max
	})
	array.forEach(element => {
		element < result.min ? result.min = +element : result.min
	})

	return result

}

console.log(getMinMax(inputData))
