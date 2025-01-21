let Marks = [];
let html = +prompt("Enter Your Html Marks");
let css = +prompt("Enter Your CSS Marks");
let js = +prompt("Enter Your JS Marks");

let paperMarks = Marks.push(html, css, js);
// console.log(Marks);

let paperName = ["Html Marks", "CSS Marks", "JS Marks"];

for (let i = 0; i < paperMarks; i++) {
  let orderNo = i + 1;

  document.write(
    "<h2/>" +
      orderNo +
      "." +
      " " +
      paperName[i] +
      " " +
      Marks[i] +
      "<h2/>" +
      "<br/>"
  );
}
