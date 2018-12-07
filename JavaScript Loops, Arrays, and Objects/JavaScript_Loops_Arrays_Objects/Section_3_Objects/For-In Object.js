var person = {
	name: 'Sarah',
	country: 'US',
	age: 34, 
	treehouseStudent: true,
	skills: ['JavaScript','CSS','HTML']
};

for (var prop in person) {
	console.log(prop, ': ', person[prop]);
}