
import users from './users.js';



//Task 7: Calc the balance all users

//version 1: reduce()
const calculateTotalBalance = users =>  users.reduce((totalSum,{balance}) => totalSum += balance ,0);

//version 2: forEach() 
// const calculateTotalBalance = users => {
//     let totalSum = 0;
//     users.forEach(({balance}) => totalSum += balance);
//     return totalSum;
// }


console.log(calculateTotalBalance(users));

