// let setValue = document.getElementById("setValue");
// // let getValue = document.getElementById("getValue");
// let inputValue = document.getElementById("inputValue");
// let userName = document.getElementById("userName");

// setValue.addEventListener("click", function () {
//   localStorage.setItem("inputValue", inputValue.value);
//   getValue();
// });
// function getValue() {
//   let createEle = document.createElement("h1");
//   createEle.innerHTML = localStorage.getItem("inputValue");
//   userName.appendChild(createEle);
// }
// var arr = ["Ahsan", "Ahmed"];
// var str = JSON.stringify(arr);
// console.log(str);
// localStorage.setItem("userName", str);

// var parseArr = JSON.parse(str);
// console.log(parseArr);

let obj = JSON.stringify({
  name: "Ahsan",
  age: 65,
});
console.log(obj);
let parseObj = JSON.parse(obj);
console.log(parseObj);
