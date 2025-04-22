// let obj = {};
// obj.name = "Ahsan";
// console.log(obj);

// var stdObj = {
//   name: "Ahsan",
//   courses: ["Html", "Css", "Js"],
//   result: {
//     html: 89,
//     css: 87,
//     js: 65,
//   },
// };
// console.log(stdObj.courses[1]);
// console.log(stdObj.result["css"]);

// var stdObj = {
//   firstName: "Jaffar",
//   lastName: "Amaan",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(stdObj.fullName());

let result = {
  firstName: "Muhammad",
  lastName: "Ahsan",
  emailAddress: "ahsanarshad55565@gmail.com",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  score: {
    html: 87,
    css: 76,
    js: 56,
    reactJs: 48,
  },
  totalScore: function () {
    // return (
    //   this.score.html + this.score.css + this.score.js + this.score.reactJs
    // );
    let totals = 0;

    for (let key in this.score) {
      totals += this.score[key];
    }
    return totals;
  },
};
let checkScore = result.totalScore();
console.log(checkScore);
