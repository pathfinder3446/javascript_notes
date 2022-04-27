// is statement example

// check if the number is positive

// const n1 = +prompt(`Enter a number:`);
// console.log(n1, typeof n1)
// if (n1 > 0) {
//     console.log(`${n1} is positive`);
// } else if (n1 < 0) {
//     console.log(`${n1} is negative`);
// } else {
//     console.log(`${n1} is 0`);
// }

// https://www.perryellis.com/pages/size-chart
// suggest size for men as XS S M L XL XXL on chest size

// const size = +prompt("Enter your chest size");
// if (size < 32) {
//   console.log("Wrong Size");
// } else if (size < 35) {
//   console.log("XS");
// } else if (size < 38) {
//   console.log("S");
// } else if (size < 41) {
//   console.log("M");
// } else if (size < 44) {
//   console.log("L");
// } else if (size < 47) {
//   console.log("XL");
// } else if (size < 50) {
//   console.log("XXL");
// } else {
//   console.log("Wrong Size");
// }

// write a javascript program taht accept three integers and display the greatest.

const n1 = +prompt('Enter the first number')
const n2 = +prompt('Enter the second number')
const n3 = +prompt('Enter the third number')

if (n1 > n2 && n1 > n3) {
    console.log(`${n1} is the greatest number`)
} else if (n2 > n3 && n2 > n1) {
    console.log(`${n2} is the greatest number`)
} else {
    console.log(`${n3} is the greatest number`)
}
