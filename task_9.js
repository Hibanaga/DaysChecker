
import users from './users.js';


//TASK 9: array of friend sorted by count friend

const getNamesSortedByFriendsCount = users => users.sort((a,b) => b.friends.length - a.friends.length).map(({name}) => name);


console.table(getNamesSortedByFriendsCount(users));
