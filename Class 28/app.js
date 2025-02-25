// function greet() {
//   alert("Hello user");
// }
// function getInputValue() {
//   let inputValue = document.getElementById("inputValue");
//   alert(namefield.value);
// }
// function setInputValue() {
//   let inputValue = document.getElementById("inputValue");
//   inputValue == "Ahsan";
// }
// function getValue() {
//   let parraValue = document.getElementById("parraValue");
//   console.log(parraValue.innerHTML);
// }
// function setValue() {
//   let parraValue = document.getElementById("parraValue");
//   parraValue.innerHTML = "html bhai log";
// }

// function changeimg() {
//   let img = document.getElementById("img");
//   img.src =
//     "./free-photo-of-vibrant-yellow-daisies-with-butterfly-in-chile.jpeg";
// }

// function off() {
//   let off = document.getElementById("off");
//   off.src = "./bulb-2287759_1280.jpg";
// }
// function on() {
//   let off = document.getElementById("off");
//   off.src = "./pexels-photo-577514.webp";
// }
function submit() {
  let inputName = document.getElementById("inputName");
  if (inputName.value.length < 3) {
    inputName.style.backgroundColor = "red";
  } else {
    inputName.style.backgroundColor = " green";
  }
}
