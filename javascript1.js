// console.log("Hello Vishal Samyal");
// console.log("Hello coder roots");

// -------------------------------Vaiables in javascript-------------------------------------

// fullName = "Tony Stark";
// age = 24
// x = null;           // null ka mtlb pta hai iske ander kya hai pr ik  khali value hai
// y = undefined;      //pta he nahi iske andr kya hai
// isFollow = false;

// fullName = 25;     //Dynamically typed = javascript me hume pehle se he apne data ka type nhi btana ptda wo runtime pe define kr leta hai
//                   // = assignment operater btata hai ki ye value is variable ke andr store ho rahi hai

// console.log(fullName);
// console.log(age);
// console.log(x);
// console.log(y);
// console.log(isFollow);

// fullname = "Vishal Samyal";
// fullName = "Yuvraj Rai";

// full Name = "Tonny Shark"; //space is not allowed in variable name//
// fullname@ = "tonny Shark"; //not allowed also

// _fullName = "Vishal";  //valid name
// $fullName = "yuvraj";  //valid name

// console.log(fullname);  //variables names are case sensitive; "a" & "A" is different
// console.log(fullName);

//---------------------variables----------------------------

// let a = 67
// console.log(a)
// a = "vishal"
// console.log(a)

// let 2vishal = 67; //variable name cannot start with a number
// let vishal@ = 67; //variable name cannot contain special characters except $ and _
// let var = 67; //var is a reserved keyword in JavaScript and cannot be used as a variable n

//-----------------------------var variable-----------------------------

// var age = 24
// var age = 59
// var age = 86

// console.log(age)

//-----------------------------let variable-----------------------------

// let age = 24
// // let age = 59 // This line would cause an error because you cannot redeclare a variable declared with let in the same scope
// age = 59 // This is allowed because we are reassigning the value, not redeclaring the variable
// console.log(age)

//-----------------------------const variable-----------------------------

// const age = 24
// const age = 59 // This line would cause an error because you cannot redeclare a variable declared with const in the same scope
// age = 59 // This line would also cause an error because you cannot reassign a value to a variable declared with const
// console.log(age)

//---------------------------------------Data types in javascript-------------------------------------
//Primitivee data types in javascript

// let age = 24
// let price = 100.50
// console.log(typeof price)

// let fullName = "Vishal Samyal"
// console.log(typeof fullName)

// let isFollow = false
// console.log(typeof isFollow)

// let x = null
// console.log(typeof x) // This will output "object" due to a quirk in JavaScript, even though null is not actually an object

// let y;
// console.log(typeof y)

// let symbol1 = Symbol("id")
// console.log(typeof symbol1)

// let bigInt1 = 1234567890123456789012345678901234567890n
// console.log(typeof bigInt1)

//Non-primitive data types in javascript

// const student = {
//     fullName : "Vishal Samyal",
//     age : 20,
//     cgpa : 8.2,
//     isPass : true,
// }

// student["age"] = student["age"] + 1
// student["fullName"] = "Yuvraj Rai"

// console.log(student["age"])
// console.log(student.fullName)
// console.log(typeof student)

//------------------------------------Hoisting------------------------------------------
//Folowing two lines will run successfully due to Javascript hoisting

// console.log(a)
// greet()  

// function greet(){
//     console.log("Good Morning") 
// }

//  var a = 9; // Declaration hoisted to the top but initialization is not
//  console.log(a)

//---------------------------------------let and const-----------------------------------

// console.log(a) 
// greet()  

// function greet(){
//     console.log("Good Morning") 
// }

//  let a = 9; 
// //  const a = 9;
//  console.log(a)

//----------------------------Function expressionss and class expression are not hoisted--------------------------------

// greet()
// const greet = () => {
//     console.log("Good Morning")
// }

// greet()
// var greet = () => {                  //arrow function
//     console.log("Good Morning")
// }

// greet()
// var greet = function() {            //function expression
//     console.log("Good Morning")
// }

//--------------------------------------Function Declaration---------------------------------
// greet()

// function greet() {           //in function declaration we can call anywhere
//     console.log("Vishal Samyal")
// }

//-------------------------------------Function Expression-----------------------------------
// greet()

// const greet = function () {   //if we are using function expression we have to call at the bottom 
//     console.log("Vishal Samyal")
// }

// greet()

//--------------------------------------Arrow Function--------------------------------------

// const sayHello = (name, greeting) => console.log(greeting + " " + name)    //also write this in one line

// const x = {
//     name: "Vishal",
//     role: "Mern Stack Developer",
//     exp: 30,
//     show: function() {
//         // let that = this
//         //  console.log(this)
//         setTimeout(() => {  
//         console.log(`The name is ${this.name}\nThe role is ${this.role}`)  
//         }, 2000)
//     }
// }
// sayHello("Vishal", "Good Afternoon")
// console.log(x.name, x.exp)
// x.show()


