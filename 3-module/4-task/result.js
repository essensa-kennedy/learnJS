let user1 = {
	"balance": "$1,825.65",
	"picture": "https://placehold.it/32x32",
	"age": 21,
	"name": "Golden Branch",
	"gender": "male",
	"greeting": "Hello, Golden Branch! You have 7 unread messages.",
	"favouriteFruit": "banana"
 };

 let user2 = {
	"balance": "$1,000.65",
	"picture": "https://placehold.it/32x32",
	"age": 27,
	"name": "Duncan Randall",
	"gender": "male",
	"greeting": "Hello, Duncan Randall! You have 7 unread messages.",
	"favouriteFruit": "orange"
 };

 let users = [user1, user2]

function showSalary (users, age) {
	let result = ''
	users.filter(element => element.age < age).forEach(element => result += `${element.name}, ${element.balance}\n`)
	return result
}

console.log(showSalary(users, 45))

