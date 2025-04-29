// let stdObj = {
//   id: 657587,
//   name: "Ahsan",
//   age: 32,
//   email: "ahsanarshad@gmail.com",
//   course: "web and app dev",
// };
let parent = document.getElementById("parent");
// for (let key in stdObj) {
//   parent.innerHTML += `<td>${stdObj[key]}</td>`;
// }

let stdArray = [
  {
    id: 657587,
    name: "Ahsan",
    age: 32,
    email: "ahsanarshad@gmail.com",
    course: "web and app dev",
  },
  {
    id: 657587,
    name: "Ali",
    age: 32,
    email: "ahsanarshad@gmail.com",
    course: "web and app dev",
  },
  {
    id: 657587,
    name: "Ahmed",
    age: 32,
    email: "ahsanarshad@gmail.com",
    course: "web and app dev",
  },
  {
    id: 657587,
    name: "lol",
    age: 32,
    course: "web and app dev",
    email: "ahsanarshad@gmail.com",
  },
];

for (let i = 0; i < stdArray.length; i++) {
  parent.innerHTML += `
        <tr>
            <td>${stdArray[i].id}</td>
            <td>${stdArray[i].name}</td>
            <td>${stdArray[i].age}</td>
            <td>${stdArray[i].email}</td>
            <td>${stdArray[i].course}</td> 
        </tr>`;
}
