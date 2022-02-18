let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

function namify(users) {
	
	namesArray = []

	for (let i in users) {
		namesArray.push(users[i].name)
	}

	return namesArray
	
 }


let names = namify(users); 
console.log(names)
