console.log("Welcome October");
document.write("Welcome to uki");
alert(1+4)
// window.alert("alert")
document.getElementById("demo").innerHTML =3+4
console.log(firstName); 
var firstName="mala";
var lastName="kumar";
console.log(firstName+"      "+lastName);
var firstName="meena"
console.log(firstName+" "+lastName);


let x=12;
let y=10;
console.log(x+y);
 x=10;
 console.log(x+y);
 let m=15;
 m=17;
 console.log(m);
 console.log(2)
// var can reassign and redeclare
var a=5;
var b=6;
a=7;
// let canredeclare  and not reassign
let c=67;
c=23;

// const d=78;
// const d=23;
d=2;
console.log(d);
// Uncaught SyntaxError: Identifier 'd' has already been declared (at script.js:30:7)

var w=18;
console.log(w+z);
var w=25;
var z=10;
console.log(w+z)
var w=12;
console.log(w+z);


const p=20;
{
    const p=40;
    console.log(p);
}
console.log(p);
let g=4.983;
g.toFixed(0) 




const sum = eval('10*10+5')
// concat
var firstName="shalu";
var greet="hi!";
console.log(firstName.concat(greet));
console.log(firstName.concat(" ",greet," ji"));

// space remove Trim
var firstName="   welcome   ";
console.log(firstName)
console.log(firstName.trim());

// replace
var f="good evening!";
var fReplace=f.replace('evening','afternoon sir');
console.log(fReplace)

var d="hi hi hi";
var L=d.replace('hi','hello');
console.log(L)

// charAt
var text1="hello guys";
console.log(text1.charAt(4))

// index
// var q="hello"
// console.log(qlength-1)

// slice
str=' piranavan is a very diffcult person he is always tell honest.'
console.log(str.slice(20));
console.log(str.slice(-1));
console.log(str.slice(-10,-2))

// split
str='hdfufd hey fiudf khdfdfj jhfjdn'
console.log(str.split('',));
console.log(str.split(' ',2));
console.log(str.split('hey',));

// substring
one='yfg yre  t43y hgt78rt hdbeyhd bdef rthuth brh'

// object
let person={
    age:22,
    name:"shaly",
    gender:"female",
}
console.log(person.age);
console.log(person);
person.address="kilinochchi";
console.log(person);
person.age=24;
console.log(person.age);

let emptyValue = null


var fruits=["banana","apple","orange"];
console.log(fruits);
console.log(fruits[1]);
var fruits=[];
console.log(fruits);
var fruits=new Array("banana","apple","orange");
console.log(fruits);
var a=[ [1,2],["a","b","c"]];
console.log(a[1][1]);
 var z=[];
 z[99]=45;
   console.log(z);


toString
var Number=[1 ,2 ,3 ,4];
var Number1= Number.toString();
console.log(Number1)
// join
var fruits=["mango" , "apple" , "orange"];
var fruits1=fruits.join(" and ");
console.log(fruits1);

// pop
var fruits2=["mango" , "apple" , "orange"];
fruits2.pop();
console.log(fruits2);

// push
var fruits3=["mango" , "apple" , "orange"];
fruits3.push("his");
console.log(fruits3)

const animals=["dog","cat"];

const count=animals.push('cow');
console.log(animals);

