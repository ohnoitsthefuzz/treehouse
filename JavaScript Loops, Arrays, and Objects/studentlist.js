for (var i = 0; i < students.length; i++) {
	document.write('<h2>' + students[i].Name + '</h2>');

	for (prop in students[i]) {
		document.write(prop + ': ' + students[i][prop] + '<br>');
	}
}