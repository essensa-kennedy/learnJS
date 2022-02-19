function camelize (str) {
	let arrayFromString = str.split('')

	for (let i = 0; i < arrayFromString.length; i++) {
		if (arrayFromString[i] == '-') {
			arrayFromString[i+1] = arrayFromString[i+1].toUpperCase()
			arrayFromString[i] = ''
		}
	}
	return arrayFromString.join('').trim()
}

console.log(camelize('list-style-image'))