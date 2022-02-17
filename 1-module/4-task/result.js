function checkSpam(str) {
	str = str.toLowerCase()
	return (str.includes('1xbet now') || str.includes('free xxxxx') ? false : true)
}

console.log(checkSpam('frEE xxxxx'))