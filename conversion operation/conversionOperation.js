let score = "33"

console.log(typeof score);
console.log(typeof(score));

// Number ke andar convert kiye cheezo ko
let valueInNumber  = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // "33abc" = Nan, null = 0, undefined = Nan, true = 1, "sakshi" = Nan 

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
// Boolean ke andar convert kiye 
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sakshi" => true

// string ke andar convert kiye
let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); // dekhne main no. jaisa lg raha but wo string bn gyaa hain.

// ***************************** Operations ****************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " sakshi"

let str3 = str1 + str2;
console.log(str3);

// console.log("1"+ 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1,num2,num3;

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//postIncrement
let x = 3;
const y = x++;
console.log(x);
console.log(y);

//preIncrement
let a = 3;
const b = ++a;
console.log(a);
console.log(b);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion








