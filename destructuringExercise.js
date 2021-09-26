// // Object Destructuring 1
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

/* End of Object Destructuring 1 */

/* ********************************************************************************************** */

// // Object Destructuring 2
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
// };
// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); 

// Hannah's Answer: 
// *************************************************************
// {    yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
// }
// *************************************************************

/* ********************************************************************************************** */

// Object Destructuring 3
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple.
getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green.
getUserData({}) // Your name is undefined and you like green. 

/* ********************************************************************************************** */

// Array Destructuring 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

/* ********************************************************************************************** */

// Array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // -> see below

// Hannah's Answer: 
// *************************************************************
// [
// "Bright copper kettles",
// "warm woolen mittens",
// "Brown paper packages tied up with strings"
// ]
// *************************************************************

/* ********************************************************************************************** */

// Array Destructuring 3
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // [10, 30, 20]

/* ES2015 Refactoring */
// ES5 Assigning Variables to Object Properties
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

// var a = obj.numbers.a;
// var b = obj.numbers.b;

/* Write an ES2015 Version */
// const { numbers: {a,b} } = obj;
// console.log(a);
// console.log(b);
// From Springboard,
const {a,b} = obj.numbers;

/* ********************************************************************************************** */

// ES5 Array Swap
var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

/* Write an ES2015 Version */
[ arr[0], arr[1] ] = [ arr[1], arr[0] ];
console.log(arr);

/* ********************************************************************************************** */

// raceResults()
// Write a function called raceResults which accepts a single array argument. 
// It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array

// function raceResults(arr){
//     return {
//         first: arr[0],
//         second: arr[1],
//         third: arr[2],
//         rest: [...arr.slice(3, arr.length)]
//     }
// }

// function raceResults(arr){
//     const [ first, second, third, ...rest ] = arr;

//     return { first, second, third, rest:[...rest] }
//     // return {
//     //     first: arr[0],
//     //     second: arr[1],
//     //     third: arr[2],
//     //     rest: [...arr.slice(3, arr.length)]
//     // }
// }

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest}); 



