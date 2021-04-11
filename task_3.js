
import users from './users.js';



//TASK 3: Retrun users with different gender

//version 1: filter()
const getUsersWithGender= (users,findGender) => users.filter(({gender}) => gender.toLowerCase() === findGender.toLowerCase());

// version 2: reduce()
// const getUsersWithGender = (users,genderFind) => {
//     return users.reduce((userArr,user) => {
//         let {gender} = user;
//         if (gender.toLowerCase() === genderFind.toLowerCase()) {
//             userArr.push(user);
//         }
//         return userArr;
//     },[])
// }

//version 3: forEach() 
// const getUsersWithGender = (users,gender) => {
//     let userArr = [];
//     users.forEach(user => {
//         if (user.gender.toLowerCase() === gender.toLowerCase()) {
//             userArr.push(user);
//         }
//     });
//     return userArr;
// }

console.table(getUsersWithGender(users,"male"));


