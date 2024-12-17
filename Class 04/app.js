// console.log("Hello world")


// var a = 5;
// a = a+1
// console.log(a)

// var b=10;
// b=b+1;
// console.log(b+1)


// b +=1
// console.log(b)

// var firstName = "Ahsan"
// firstName  +=" "+ "Arshad"
// console.log(firstName)


// var b=10;
// b=b+1
// console.log(b);

//.....................Increment............................

// var a=20;
// a++;         //..............If you wnt to add only 1 in number  can use this method (add ++ after variable name)
// console.log(a)

// ........................Decrement..............................

// var v=20
// v--;
// console.log(v)


//.............Post Increment...............Pre increment..........................

// var a=10;
// a++;     ///......................Post Increment
// ++a;      /// .................Pre Incrementcl
// console.log(a)

// var n =10;
// console.log(n--)
// console.log(n)
// console.log(--n)

//.............Problem.....
// var a =5
// var result= a++ + a + ++a 
// console.log(result)

// a = 6;
// var result = --a + --a - a + ++b 
// console.log(result)



// 5 - 7 + 7 + 7 + 5 + 5
// 4 + 3 +3+2+2+4-3+3-3
// 9 + 8  + 7 +7+9 




// 8 + 10 + 9 - 9  === 18
/// 8 - 7 - 7 + 7 + 8 + 7 == 16
// 8 + 9 +11-10- === 29

//...........................Prompt............
// prompt use for to take input from user
/// prompt default take string value
// if you want to show default value just like placeholder you put one more string after seperator ( , ); 

// var fullName = prompt("Enter Your Name");
// console.log("fullName", fullName)

// var num1 =+prompt("Enter_number_1");
// var num2 =+ prompt("Enter_number_2");
// console.log(num1 + num2)

// var name = prompt("Enter Your Name", "John Doe"  )


//.................. Conditions ... If ... else ......................



var userAge = +prompt("Enter Your Age")

if (userAge === 18){
    console.log("Allow")
}
else {
    console.log("Not Allow")
}


