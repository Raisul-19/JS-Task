

console.log(1);
console.log(2);


let age = 25;
let year = 2022;

console.log(age, year);

age = 30; //over write a variable.
console.log(age);

const points = 100; //constant can not be changed

console.log(points);

var score = 75;

console.log(score);

/*  data type of js
number : 1, 46, 2.21 ,
string : 'hello' , "hridoy" , "email@gamil.com" "124" ,
boolean : true/false.
null : explicitly set with no value.
undefine : for variables that have not yet define.
object :  complex data structures - array , dates, literals etc.
symbol : used with object.
*/

// string  

console.log("my name is Md Raisul Islam");

let email = 'hridoy@gmail.com';
console.log(email);

// string concatenation or adding two string

let firstName = "Raisul";
let lastName = "Islam";

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting charecter .

console.log(fullName[0]);

// string length

console.log(fullName.length);

//  string methods

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

console.log(result);


let index = email.indexOf('@'); // finding index number
console.log(index);

//common string method .

    // from previous mail acount

//let resul = email.lastIndexOf('i');
//et resul = email.slice(0,10);   // for slicing some 

//let resul = email.substring(0, 5);  // for made a sub string (starting number, string number)
let resul = email.replace('h', 'r')  // replace a charecter (given ch,  wanted ch) . if mani ch are same then change only first index

console.log(resul);









