var person = {
	name: 'Sarah',
	country: 'US',
	age: 34, 
	treehouseStudent: true,
	skills: ['JavaScript','CSS','HTML']
};

function print(message) {
	var div = document.getElementById('output');
	div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Irina';
person.country = 'Soviet Union';
message += '<p>But I wish my name was ' + person.name + '</p>';
message += '<p>and I lived in ' + person.country + '</p>';
print(message);