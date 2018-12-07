var html = '';
var red;
var green;
var blue;
var rgbColor;

function getRandomNumber(upper) {
  var num = Math.floor(Math.random() * upper);
  return num;
}

for (var i = 0; i < 10; i += 1) {
  red = getRandomNumber(256);
  green = getRandomNumber(256);
  blue = getRandomNumber(256);
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
  }
    document.write(html);
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
//
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
//
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
//
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
//
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
//
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
//
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
//
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
//
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// document.write(html);
