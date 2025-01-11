// var courses = ["Html", "Css", "Js", "React"];

// for (let i = 0; i < courses.length; i++) {
//   document.write("<h4>" + courses[i] + "<h4/>" + "<br/>");
// }

////...................Flag concept............

var cities = ["karachi", "lahore", "multan", "islamabad", "hyderabad"];

var city = prompt("Enter you city name.");

var isMatch = false;

for (let i = 0; i < cities.length; i++) {
  if (city == cities[i]) {
    isMatch = true;
    alert("Welcome");
    break;
  }
}
if (isMatch == false) {
  alert("Not found!");
}
