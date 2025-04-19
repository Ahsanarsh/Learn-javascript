let obj = {
  "Car Name": "Civic",
  model: 2022,
  color: "glowing gray",
  "Engine No": 237658,
};

// console.log(obj["Car Name"]);
// console.log(obj.model);
// console.log(obj.color);
// console.log(obj["Engine No"]);

// for (let carData in obj) {
//   console.log(carData, obj[carData]);
// }

delete obj["Car Name"];
console.log(obj);
