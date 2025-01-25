const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const number = 123.8966
console.log(number.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ Maths +++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // work for only negative
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.random()); // isme always value ayegi 0 aur 1 ke beech main ayegi
console.log((Math.random()*10)); // 10 se multiply karne pr digits left main shift ho jati hain
console.log((Math.random()*10) + 1); // is case main min value 1 ayegi 0 toh nahi ayegi

console.log(Math.floor(Math.random()*10)+1); // ye point ko avoid krega aur value 1 se lekr 9 tk ke beech main dega


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 chahiye toh add krdo min ko toh min 10 aur max 20 tk hona chahiye
 


















































































