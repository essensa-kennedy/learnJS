let friends = [
	{
		 firstName: 'Artsiom',
		 lastName: 'Mezin'
	},
	{
		 firstName: 'Ilia',
		 lastName: 'Kantor'
	},
	{
		 firstName: 'Christopher',
		 lastName: 'Michael'
	}
];

function makeFriendsList (object) {

	let listOfFriends = document.createElement('ul')

	object.forEach(element => 
		listOfFriends.appendChild(document.createElement('li')).innerHTML = element.firstName + ' ' + element.lastName)

	return console.log(listOfFriends)
}

makeFriendsList(friends)