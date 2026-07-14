let users = [
    {name: 'Akpan', age: 26},
    {name: 'Ukeme', age: 20},
    {name: 'Nancy', age: 30},
    {name: 'Chukwuemeka', age: 24},
];
let stats = getUserStatistics(users);
console.log(stats);


function getUserStatistics(users) {
    if (!users || users.length === 0) {
        return {
            total: 0, averageAge: 0, oldest: 0, youngest: 0
        };
    }
    let  totalCount = users.length;
    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    let averageAge = totalAge / totalCount;

     let oldest = users[0];
     let youngest = users[0];

     users.forEach(user => {
        if (user.age > oldest.age) oldest = user;
        if(user.age < youngest.age) youngest = user;

     });
     return {totalCount, averageAge, 
     oldest: {name:oldest.name, age: oldest.age },
     youngest: {name: youngest.name, age: youngest.age}
    };
}