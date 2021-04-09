
import users from './users.js';


// TASK 1: RETURN ARRAYS OF NAMES;
// version 1: map()
// const getUserNames = users => users.map(({name}) => name)


//version 2: reduce();
// const getUserNames = users => {
//     return users.reduce((namesArr,{name}) => {
//         namesArr.push(name);
//         return namesArr
//     },[]);
// }

//version 3: forEach() 
// const getUserNames = users => {
//     let userNames = [];
//     users.forEach(({name}) => userNames.push(name));
//     return userNames;
// }

// console.log((getUserNames(users)));


//TASK2: Return users with different eye color
//version: 1 filter()
// const getUserWithEyeColor = (users,color)=> users.filter(({eyeColor}) => eyeColor === color)


//version: 2 reduce()
// const getUserWithEyeColor = (users,color)=> {
//     return users.reduce((usersArr,user) => {
//         if (user.eyeColor === color){
//             usersArr.push(user);  
//         }
//         return usersArr
//     },[]);
// }

//version 3: forEach() 
// const getUserWithEyeColor = (users,color)=> {
//    const usersWithEyeColor = [];
//    users.forEach(user => {
//         if (user.eyeColor === color) {
//             usersWithEyeColor.push(user)
//         }
//    });
//    return usersWithEyeColor
// }

// console.table(getUserWithEyeColor(users,"blue"));


//TASK 3: Retrun users with different gender

//version 1: filter()
// const getUsersWithGender= (users,findGender) => users.filter(({gender}) => gender === findGender);

// version 2: reduce()
// const getUsersWithGender = (users,gender) => {
//     return users.reduce((userArr,user) => {
//         if (user.gender === gender) {
//             userArr.push(user);
//         }
//         return userArr;
//     },[])
// }

//version 3: forEach() 
// const getUsersWithGender = (users,gender) => {
//     let userArr = [];
//     users.forEach(user => {
//         if (user.gender === gender) {
//             userArr.push(user);
//         }
//     });
//     return userArr;
// }

// console.table(getUsersWithGender(users,"male"));



//TASK 4: Find is inactive users

//version 1: filter()
// const getInactiveUsers = users => users.filter(({isActive}) => !isActive);


//version 2: reduce()
// const getInactiveUsers = users => {
//     return users.reduce((userArr,user) => {
//         if (!user.isActive) {
//             userArr.push(user);
//         }
//         return userArr
//     },[]);
// }

// console.table(getInactiveUsers(users));


//TASK 5: find user from Email


//version 1: reduce()
// const getUserWithEmail = (users,findEmail)=> {
//     return users.reduce((resultObj,user) => {
//         let {email} = user
//         if (email === findEmail) {
//             resultObj = user
//         }
//         return resultObj;
//     },"");
// };


//version 2: filter();
// const getUserWithEmail = (users,findEmail)=> {
//     let resultArr =users.filter( ({email}) => email === findEmail)
//     return resultArr[0];
// };

// console.log(getUserWithEmail(users, 'elmahead@omatom.com'))

//TASK 6: find array range ages


//version 1: filter()
// const getUsersWithAge = (users,min,max) => users.filter(({age}) => age >= min && age <= max);

//version 2: reduce() 
// const getUsersWithAge = (users,min,max) => {
//     return users.reduce((filrtredArr,user) =>{
//         if (user.age >= min && user.age <= max) {
//             filrtredArr.push(user);
//         }
//         return filrtredArr;
//     },[])
// }

// console.table(getUsersWithAge(users,20,30));


//Task 7: Calc the balance all users

//version 1: reduce()
// const calculateTotalBalance = users => {
//     return users.reduce((totalSum,{balance}) => totalSum += balance ,0)
// }

//version 2: forEach() 
// const calculateTotalBalance = users => {
//     let totalSum = 0;
//     users.forEach(({balance}) => totalSum += balance);
//     return totalSum;
// }


// console.log(calculateTotalBalance(users));



//TASK 8: Find the User with friend

//version 1: filter() with map()
// const getUsersWithFriend = (users,friendName) => {
//     return users.filter(({friends}) => friends.includes(friendName)).map(({name}) => name);
// }

//version 2:  reduce()
// const getUsersWithFriend = (users,friendName) => {
//     return users.reduce((nameArr,{friends,name}) => {
//         if (friends.includes(friendName)) {
//             nameArr.push(name);
//         }
//         return nameArr;
//     },[])
// }

// console.log(getUsersWithFriend(users,'Briana Decker'))


//TASK 9: array of friend sorted by count friend


//version 1: 
// const getNamesSortedByFriendsCount = users => {
//     return users.sort((a,b) => sortfunc(a,b)).reverse().map(({name}) => name);

//    //function of sorting
//    function sortfunc(a,b) {
//     let friendA = a.friends.length;
//     let friendB = b.friends.length;
//    let comprasion = 0;

//    if (friendA > friendB) {
//        comprasion =1;
//    } else if (friendA < friendB) {
//        comprasion = -1;
//    } 
//     return comprasion
//    }
// }

// console.table(getNamesSortedByFriendsCount(users));


//TASK 10: Find unique skills all users
const getSortedUniqueSkills = users => {
    let resultArr = [];
    users.map(({skills}) => skills).forEach(skillsArr => {
        for(let skill of skillsArr) {
            if(!resultArr.includes(skill)) {
                resultArr.push(skill);
            }
        }
    });
    return resultArr
}



console.log(getSortedUniqueSkills(users));
 








