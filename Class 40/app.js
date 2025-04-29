// template literals`

// let userName = "Ahsan";
// let str = `My name is ${userName}`;
// console.log(str);

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
  let main = document.querySelector(".main");
  main.innerHTML += `<div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>`;
  btn2.addEventListener("click", function () {
    
  });
});
