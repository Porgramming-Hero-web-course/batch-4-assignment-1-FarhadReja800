{
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

   const sumArray = (num1: number[]): number => {
        return num1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
    console.log(sumArray([1, 2, 3, 4, 5]));
    //
}