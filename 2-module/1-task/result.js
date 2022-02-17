let salaries = {
	John: 1000,
	Ann: 1600,
	Pete: 1300,
	month: 'December',
	currency: 'USD',
	isPayed: false
 }

sumSalary = (obj) => {
	let sum = 0

	if (!isEmpty(obj)) {
		for (let key in obj) {
			isNumber(obj[key]) ? sum+=obj[key] : sum
		}
		return sum
	}

	return message = 'Объект пустой'
	
	
}




function isEmpty(obj) {
	for (let key in obj) {
		return false
	}
	return true
}

function isNumber(item) {
	return (
		((typeof item == 'number') && (isFinite(item) == true) && (isNaN(item) == false)) 
		) ? true : false
}

console.log(sumSalary(salaries))