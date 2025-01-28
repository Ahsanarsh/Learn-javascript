// nested statement

// let email = "ahsanarshad55565@gmail.com";
// let password = "admin123";

// if (email == "ahsanarshad55565@gmail.com" && password == "admin123") {
//   console.log("Admin Login");
// } else {
//   console.log("email or password invalid");
// }

// if (email == "ahsanarshad55565@gmail.com") {
//   if (password == "admin123") {
//     console.log("Admin login");
//   } else {
//     console.log("password not match");
//   }
// } else {
//   console.log("Email address not found");
// }

//.................................    !=(! not)  ..................

// let num1 = 10;
// if (num1 != 11) {
//   console.log("Not match");
// } else {
//   console.log("match");
// }

// let str = "saylani mass it trainig html css js react";
// console.log(str.split(" "));

// console.log(arr.join(" "));
// console.log(arr.reverse(""));
// console.log(arr.indexOf("saylani"));

//........................capitalixe the string every word............

// let str =
//   "Hypertext Markup Language (HTML) is the standard markup language for documents";
// let arr = str.split(" ");
// // console.log(arr);

// let tempArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let word = arr[i];
//   //   console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());
//   tempArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
// }

// console.log(tempArr.join(" "));

//.......................date or time

let now = new Date().toDateString();
console.log(now);
