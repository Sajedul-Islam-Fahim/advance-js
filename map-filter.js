const numbers = [3, 4, 5, 6, 7, 8];

// const result = numbers.map(function (element) {
//      return element * element;
// })
//map- Kono ekta array er moddhe looping kore prottek ta element niye kichu ekta korbe ,korar por result ta  ekta array hisebe dibe
const result = numbers.map (element => element * element);
console.log(result);

//filter o array dibe
const bigger = numbers.filter(element => element > 5);
//find sudu ekta element dibe 
const isThere = numbers.find(element => element < 5);
console.log(bigger);
console.log(isThere);