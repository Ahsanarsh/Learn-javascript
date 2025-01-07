//.........................Loops..............

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }
// for (let i = 1; i <= 20; i++) {
//   console.log((i += 2));
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
var num = +prompt("Enter Table Num");
var num_Start = +prompt("Enter Table Starting Point!");

var num_length = +prompt("Enter Table Ending Point");

if (num_Start > num_length) {
  console.log(alert("You Starting Point is Greater Than Ending Point"));
} else {
  for (let i = num_Start; i <= num_length; i++) {
    document.write(num + "x" + i + "=" + i * num + "<br/>");
  }
}
