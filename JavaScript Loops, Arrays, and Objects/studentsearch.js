//This code is a search engine drawing on [students]

var search;
var match;


function print(message) {
	document.write('<p>' + message + '</p>');
}



while (true) {
//These two lines prompt user for input and processes it to uniform lower case.
search = prompt('Please enter the student\'s name you\'d like to search for.');
search = search.toLowerCase( );
console.log(search);

if (search === null || search === 'quit') {
	break;
   } 

//Test of above successful; typing 'quit' ends prompt



for (var i = 0; i < students.length; i++) {
	match = students[i].Name;
	match = match.toLowerCase();
	console.log(match);
	
	if (match === search) {	
			
	print('<h2>Student Record Found</h2>');
			
	for (var prop in students[i]) {
		print(prop + ': ' + students[i][prop] + '<br>');
		}
		
	} 

  }
	   break;
 }

  


