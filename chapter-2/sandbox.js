

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


// math operator  +, -, *, /, **, %

let redius = 10;
const pi = 3.14;

console.log(redius, pi);

let sum = redius + 5;
let sub = redius - 5;
let mult = redius * 5;
let dev = redius / 5;


let power = redius ** 5;
let mod = redius % 5;

let area = pi * redius**2


console.log(sum);
console.log(sub);
console.log(mult);
console.log(dev);

console.log(mod);
console.log(power);

console.log(area);


// order of operation  _ B I D M A S

let operation = 5 * (10-3)**2;

console.log(operation);


let likes = 10;
 // likes = likes + 1; same of likes++
 // likes++;
 // likes--;   // same of likes = likes - 1

 likes += 10;   // same to likews = likes + 5
 // likes -= 5  // same to likews = likes - 5
 // likes *= 5  // same to likews = likes * 5
 // likes /= 5  // same to likews = likes / 5
 // likes -= 5  // same to likews = likes - 5
console.log(likes);


// NaN  - not a number

console.log(5 / 'hello');


let coment =  'the blog has ' + likes + ' likes';
console.log(coment);

//template strings

let title = 'best resds of 2022';
let author = 'hridoy'
let like = 30;

// concatenation way 

// let blog =  'the blog called ' + title + ' by ' + author + ' has ' + like + ' likes';
// console.log(blog);

// template string way
let blog = `the blog called ${title} by ${author} has ${like} likes`;
console.log(blog);

// creating html template

let html = `

    <h2>${title}</h2>
    <p>by ${author}</p>
    <span> this blog has ${like} likes</span>

`;
console.log(html);



//  array  

let ninjas = ['raisul', 'islam', 'hridoy']; // string type arry

console.log(ninjas);
console.log(ninjas[1]);

ninjas[2] = 'habib';   //  over write a value

console.log(ninjas);
console.log(ninjas[2]);


let ages = [20, 25, 30, 35]; // number type array
console.log(ages[3]);


let random = ['saun', 'cristyan', 30, 25.43];  // random type array
console.log(random);

// joining

let joining = ninjas.join(',');
console.log(joining);


let con = ninjas.concat('joy', 'ornob');

console.log(con);

let pushing = ninjas.push('jon');  // pushing a new valu

console.log(ninjas);


let deleting = ninjas.pop()  // for delet the last value 

console.log(ninjas);
console.log(deleting);








