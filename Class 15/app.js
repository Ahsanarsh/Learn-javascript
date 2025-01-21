//    Today Topics
//  indexof  ==> give a index no of value but find from left to right
//  lastindexof ==> give a index no of value but find from right to left
//  replace  ==>
//  replaceAll ==> take two string value first value that you wnt to change from second value
//  charAt  ==> take a index no return string value
//  math.round ==> round of the value
//  math.floor
// math.ciel

// let str =
//   "Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript (HTML), a programming language.";

// finding index no of word that you want to change

// for (let i = 0; i < str.length; i++) {
//   console.log(find.slice(i, i + 6));
//   if (str.slice(i, i + 6) == "(HTML)") {
//     console.log(i, "index no");
//     let leftSide = str.slice(0, i);
//     console.log(leftSide);
//     let rightSide = str.slice(i + 6);
//     console.log(rightSide);
//     let fullpara = leftSide + "Hypertextmarkuplanguage" + rightSide;
//     console.log(fullpara);
//     break;
//   }
// }

//  ...........................indexof (method).............

// let str =
//   "Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript (HTML), a programming language.";

// whenever method (indexof) give -1 so the finding word doesnot exist in the string
// this also method work on array
// indexof alwys find only one value
//
// console.log(str.indexOf("(HTML)"));

// ....................................replace (method) ............

// var str =
//   "Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript (HTML), a programming language.";

// let find = str.replace("(HTML)", "hypertextmarkuplanguage"); use for change one value
// let find = str.replaceAll("(HTML)", "hypertextmarkuplanguage"); use for chane multiple value
// console.log(find);

// ....................................charAt............

// var find = "saylani";
// console.log(find.charAt(4));

//.............................math.roundof

// let num1 = 86.98;
// console.log(Math.round(num1));

//............................math.floor

// let num1 = 86.98;
// console.log(Math.floor(num1));

//.................................math.ceil

// let num1 = 79.09;
// console.log(Math.ceil(num1));
