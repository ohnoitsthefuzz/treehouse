var person = {
	Name: 'Sarah',
	Country: 'US',
	Age: 34, 
	TreehouseStudent: true,
	Skills: ['JavaScript','CSS','HTML']
};

function print(message) {
	var div = document.getElementById('output');
	div.innerHTML = message;
}

// var message = '<p>Hello. My name is ' + person.name + '</p>';
// message += '<p>I live in the ' + person.country + '</p>';
// person.name = 'Irina';
// person.country = 'Soviet Union';
// message += '<p>But I wish I lived in ' + person.country + '</p>';
// print(message);

// Successful for-in loop; logs property name, a ':', and property value for each property of the person object.

// He uses commas instead of +, which causes the information to print to the console differently.

for (var prop in person) {
	print(prop + ': ' + person[prop]);
}