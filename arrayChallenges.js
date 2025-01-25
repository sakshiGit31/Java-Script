/*
1. Declare an array named `teaFlavours` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`.
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavours = ["green tea", "black tea", "oolong tea"]

const firstTea = teaFlavours[0]

/*
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`.
    Access the third element in the array and store it in a variable named `favoriteCity`.
*/     

let cities = ["London", "Tokyo", "Paris", "New York"]
const favoriteCity = cities[2];

/*
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`.
   Change the second element of the array to `"jasmine tea"` 
*/

let teaTypes = ["herbal tea", "white tea", "masala tea"];
teaTypes[1] = "jasmine tea"
console.log(teaTypes);

/*
4. Declare an array named `citiesVisited`containing `"Mumbai"` and `"Sydney"`.
 Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin"); // add any value at the end.
console.log(citiesVisited);

// let citiesVisited = ["Mumbai", "Sydney"]
// citiesVisited[citiesVisited.length] = "Berlin";
// console.log(citiesVisited);

/*
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`.
    Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

/*
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`.
  Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

/*
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"` and `"New York"`.
  Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities);
console.log([...hardCopyCities]);

/*
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`.
  Merge these two arrays into a new  array named `worldCities`. 
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = [europeanCities, asianCities];
let worldCities = europeanCities.concat(asianCities);
console.log(typeof worldCities);
console.log(worldCities);

/*
9. You have an array name `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`.
 Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"]

let menuLength = teaMenu.length;

/*
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"` and `"Vancouver"`.
   Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]

// let isLondonInList = cityBucketList.includes("London");
let isLondonInList = cityBucketList.includes("Jaipur");
console.log(isLondonInList);
// .includes => return true or false.

// +++++++++++Array.shift()+++++++++++++++++++
const array1 = [1,2,3];
const firstElement = array1.shift();
console.log(array1); // output = Array[2,3] // it actually removes the element from the very start of the array and also at the same time push these two on the places.
// 2 gets a place of one , 3 gets a place of two.
console.log(firstElement);  // output = 1

// +++++++++++++++++Array.unshift()+++++++++++++
let array = [1,2,3];
console.log(array.unshift(4,5)); // output = 5
console.log(array); // output = Array [4, 5, 1, 2, 3]












