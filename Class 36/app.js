// var std1Name = "Jaffar Aman";
// let std1Age = 23;
// let std1Course = "MWD";

// let std1 = ["john", 23, "web & app"];

// obj
// property => key value pair

// let personData = {
//   Name: "Ahsan",
//   rollNo: "SY23421",
//   Course: "WMD",
//   Age: 21,
// };

// console.log(personData.Course);   // . dot notation
// console.log(personData["rollNo"]); // array notation use where key come dynamically

//  In , Delete

// var cnicCheck = "cnic" in personData;
// console.log(cnicCheck);

// delete personData.Age;

// console.log(personData);

let carData = {
  name: "Civic",
  model: "Rebirth",
  color: "Red",
  cc: 1600,
  condition: 10 / 8,
  noPlate: "AVG 4672",
};

// console.log(carData.name);
// console.log(carData["cc"]);

for (var objkey in carData) {
  console.log(objkey, carData[objkey]);
}
