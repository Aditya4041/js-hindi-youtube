const marvel = ["thor" , "ironman" , "spiderman"]
const dca = ["superman" , "flash" , "batman"]

// marvel.push(dca) // push array inside array 
// console.log(marvel);
// console.log(marvel[3][2]);

// const newm = marvel.concat(dca) combine 2 or more array in new array
// console.log(newm);

// const allnew = [...marvel,...dca]
// console.log(allnew);

// const ad = [1,2,3,[4,5,6],7,[8,9,[1,2]]]
// const adi = ad.flat(Infinity) solve this array in one array
// console.log(adi);

const aditya = Array.from("aditya")  // Array.from("aditya") used for convert string into array
// console.log(aditya);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // create array of multiple elements
