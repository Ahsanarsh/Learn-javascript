// let obj = {
//   "Car Name": "Civic",
//   model: 2022,
//   color: "glowing gray",
//   "Engine No": 237658,
// };

// console.log(obj["Car Name"]);
// console.log(obj.model);
// console.log(obj.color);
// console.log(obj["Engine No"]);

// for (let carData in obj) {
//   console.log(carData, obj[carData]);
// }

// delete obj["Car Name"];
// console.log(obj);

// let obj = {
//   "Car Name": "Civic",
//   model: 2022,
//   color: "glowing gray",
//   "Engine No": 237658,
// };

// obj.age = 56; // Initializaing in  object

// var isCheck = "Car Name" in obj;
// console.log(isCheck);

// console.log(obj);

// let obj = {
//   "Car Name": "Civic",
//   model: 2022,
//   color: "glowing gray",
//   "Engine No": 237658,
// };
// obj.age = 78;
// obj.age = 76; // reInitializing of age key

// for (let objKey in obj) {
//   console.log(objKey, obj[objKey]);
// }

// var arr=[]   // ye aik true ki value hai
// var obj={}   // ye aik true ki value hai

// let obj = {
//   name: "Ahsan",
//   fatherName: "M.Arshad",
//   "Roll No": 342432,
//   Courses: ["Ai", "Web & App Dev"],
//   Score: {
//     Ai: 78,
//     "Web & App Dev": 89,
//   },
// };

// console.log(obj.Courses[0]);
// let isMatch = false;
// for (let i = 0; i < obj.Courses.length; i++) {
//   if (obj.Courses[i] == "Ai") {
//     console.log("Found");
//     isMatch = true;
//     break;
//   }
// }
// if (isMatch == false) {
//   console.log("Not Found");
// }

// let obj = {
//   name: "Ahsan",
//   fatherName: "Arshad",
//   "Roll No": 342432,
//   Courses: ["Ai", "Web & App Dev"],
//   Score: {
//     Ai: 78,
//     "Web & App Dev": 89,
//   },
//   fullName: function () {
//     return this.name + " " + this.fatherName;
//   },
// };
// // console.log(obj["Score"]["Ai"]);
// console.log(obj.fullName());
