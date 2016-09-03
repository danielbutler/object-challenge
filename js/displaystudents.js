function print (message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var html = '';

for (var i = 0; i < students.length; i +=1 ) {
  student = students[i];
  html += '<h2>Student: ' + student.name + '</h2>'
  html += '<p>Track: ' + student.track + '</p>'
  html += '<p>Achievement: ' + student.achievements + '</p>'
  html += '<p>Points: ' + student.points + '</p>'
}
print(html);