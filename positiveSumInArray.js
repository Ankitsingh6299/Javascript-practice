/*var input = [ 1, -4, 12, 0, -3, 29, -150]

console.log(input.filter(num => num>0).reduce((accumulator,currentValue) => accumulator+currentValue,0 )) */



/* PROGRAM 2: Count the occurrences of distinct elements in the given 2D array. The given input is an array, 
the elements of which are arrays of strings. The result is an object whose property names 
are the values from the arrays and their value is the number of their occurrences.*/

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];

  input
  .flat()
  .reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]) {
      accumulator[currentValue] += 1;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator
  }, {});