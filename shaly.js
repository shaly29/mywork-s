// alert("hello");
console.log("i am shaly");
const name ="shaly";
const age = 20;
let msg="i am"+ name + " i am "+ age + "years old";
console.log(msg);

// object
let person ={
age:23,
firstName:"shaly",
address:"kilinochchi"
}
person.age=20;
console.log(person.age);
console.log(person[age]);
person.w="hynjj";
console.log(person);

// array
let color=[
    "red","white"
]
color[4]= "yellow"
console.log(color);
console.log(color.length);

// array methods
let a=[23,43,543,29,[3,5,4]];
console.log(a);
console.log(a[2]);
console.log(a[6]);
console.log(a.length);
console.log(a[a.length-1]);
console.log(a[4][1]);
let c=["a","b","c"];
console.log(c);

// push
c.push("d");
console.log(c);

// pop
c.pop();
console.log(c);
console.log(c.shift());
console.log(c.unshift(1));
console.log(c)

// splice
// 1st parameter-starting index
// 2nd parameter-no,of elements to be starting index
// 3rd parameter-values to be inserted from starting index

let b=["w","x","y","z"];
console.log(b);

// b.splice(1,1);
// console.log(b);

// b.splice(1,2);
// console.log(b);

// insert
// b.splice(0,0,"n");
// console.log(b);

// replace
b.splice(1,2,"r","t");
console.log(b);

// slice(starting index,ending index)
// ending index not included
let d=[7,2,3,9,4];
console.log(d.slice(1,2));
console.log(d.slice(2,4));
// reverse
console.log(d.reverse());

// join-converts array to string
let v=["a","b","c"]
let str=v.join();
console.log(str);

// split-converts string to array
let str3="a,d,f,g";
let array = str3.split(",");
console.log(array);

// concat
let g=[1,2,3];
let h=[4,5,6];
let joined=[g,h];
console.log(joined);
joined= g.concat(h);
console.log(joined);


// ex1
let e=["a","b","c"];
let f=["d","e","f"];
let ab=[e,f];
z=e.concat(f);
console.log(z)

// condition
let weather="cold";
if (weather==="cold"){
    console.log("weather is cold");
}
else{
    console.log("weather is hot");
}


let grade="C";
switch(grade){
case "A":
    console.log("a pass");
break;
case "B":
    console.log("b passs");
    break;
case "C":
    console.log("c pass");
    break;
default:
    console.log("empty")
}




// function (parameter)-input
function greet(firstName,age){
    // let firstName=("shalu");
    let msg=("hello i am " + firstName  +" " +  age +"  i am learning js");
    console.log(msg)
}
// (arquement)-output
greet("meena",23);
greet("vikki",67);

function add(number1,number2){
console.log(number1+number2);
}
add(23,67);
// arrow function-
let sum1=(x,y)=>x+y;
console.log(sum1(5,3));






let number=5
console.log(number);
console.log(--number);
console.log(number--);

console.log(false == 1);

console.log('2'==9);

// ternary operator
let m = 16;
let type= m>19 ? "adult" :"child";
console.log(type)

// logical operator
let q=false;
let w=false;
// let e = q && w;
let i = q || w;
console.log(i);

// // input user
// let j=prompt("enter a number");
// console.log(Number(j)+10);

// math

// string
let str1= " welcome to our school ";

console.log(str1.slice(7,12));
console.log(str1.slice(-4));
console.log(str1.substring(7,12));

// substr-7 start 12 characters edukkum
console.log(str1.substr(7,12));
// replace
console.log(str1.replace('school',"uki"));
// touppercase
console.log(str1.toUpperCase());
// tolowercase
console.log(str1.toLowerCase());
// length
console.log(str1.length);
console.log(str1.trim());
console.log(str1.trimEnd());
console.log(str1.trimStart());

let bill="Rs.14";
console.log(bill.length);

// length 7 varum, vara 2 place aakanum last la
console.log(bill.padEnd(7,2));

console.log(bill.padStart(9,4));
console.log(str1[2]);
// chartat
console.log(str1.charAt(10));
console.log(str1.charCodeAt(5));
// indexof
console.log(str1.indexOf("o"));
console.log(str1.lastIndexOf("o"));
console.log(str1.indexOf("hello"));
// search
console.log(str1.search("hi"));
// include
console.log(str1.includes("school"));
console.log(str1.includes("meena"));
console.log(str1.startsWith('t'));
console.log(str1.endsWith('l'))

// template literals(Es6)
var firstName ="meena";
var lastName="kumar";
var city="srilanka";

console.log(`${firstName} ${lastName} ${city}`)

let wish=`Happy
Birthday`;
console.log(wish);
msg=`cat's name is " gfvfvf"`;
console.log(msg);

let item = 5;
let cost = 95;
let result = `You have ${item} items in your cart,
Your bill amount is $ ${cost}`
console.log(result)

// // for loop
// for(let A =1;A<=5;A=A+2){
//     console.log("kalai",A);
// }

// for(let C =10;10>=C ;C--){
//     if(C % 2 == 0){
//     console.log("m",C);}
// }



