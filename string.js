const name = "sakshi" // first way to declare string
const repoCount = 50

console.log(name + repoCount + " value"); // ye syntax old hain 

// Now you use backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation

const gameName = new String('sakshibh') //second way to declare string
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());  
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5) // isme  negative bhi de sakte 
console.log(anotherString);

const newStringOne = "    sakshi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sakshi.com/sakshi%20bharti"
console.log(url.replace('%20', '_'));

console.log(url.includes('sunday'));

const game = new String('sakshi-bh-com')
console.log(game.split('-')); // convert in to array 













