"use strict";
// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// let sum:number=0;
// let allEven:number[]=[];
// for(let i=1; i<100; i++){
//   if(i%2==0){
//     allEven.push(i);
//     sum+=i;
//   }
// }
// console.log(`${allEven},the sum is${sum}`);
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
// let array : number[] = [55,2,23,33,44,55,66,77,88,99,56] ;
// let evenNum : number[] = [] ;
// for(let index = 0 ; index <= array.length; index++){
//     if(array[index] % 2 == 0){
//         evenNum.push(array[index])
//     }
// }
// console.log("Separate Even Numbers",evenNum);
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
// let array : number[] = [32,55,64,34,56,76,87,99,11,44,57] ;
// let oddNum : number[] = [] ;
// for(let index = 0 ; index <= array.length; index++){
//     if(array[index] % 2 !== 0){
//         oddNum.push(array[index])
//     }
// }
// console.log("Separate Odd Numbers",oddNum);
// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
// function toCalculateAreaOfCircle(radius:number){
//   let pi:number=3.14;
//   let area:number=pi*radius*radius;
//   return area;
// }
// let radiusNum:number=44;
// console.log("Calculated Area of circle:",toCalculateAreaOfCircle(radiusNum));
// -Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array
// let grades: number[] = [85, 60, 30, 45, 70, 90, 40, 55, 65, 95];
// for (let i = grades.length - 1; i >= 0; i--) {
//     if (grades[i] < 50) {
//         grades.splice(i, 1);
//     }
// }
// console.log( grades);
// Write a program that uses a function to find the largest element in an array of numbers.
var arr = [23, 55, 76, 99];
var big = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > big) {
        big = arr[i];
        console.log(big);
    }
}
