//  For loop --

 for (i = 0; i < 5; i++){
     console.log('in for loop : ', i);
 }

 console.log('for loop finished');

const name = ['raisul','islam','hridoy'];

for (let i = 0; i < name.length; i++){
    // console.log(i);   // for index
    // console.log(name[i]);   ///  for the listed item

    let html = `<div>${name[i]}</div>`;

    console.log(html);


}


//   while loop  ----

let j = 0;

while(j < 5){
    console.log('in while loop : ', j);
    j++;
}
console.log('while loop finished');


const names = ['raisul', 'islam', 'hridoy'];

let n = 0;

while(n < names.length){
    console.log(names[n]);
    n++;
}


//  do while loop  -- 

let w = 2;   // if initial valu is 5 or gretar then it only show one time to this value

do{
    console.log('value is : ', w);
    w++;
} while(w < 5);

