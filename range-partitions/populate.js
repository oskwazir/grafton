const db = require('./db');
const users = require('./users');
var operations = [];

users.forEach(function(user){
  operations.push({
    type:'put',
    key: user.email,
    value:{
      email:user.email,
      createdAt: new Date
    }
  });

  user.friends.forEach(function(friend){
    operations.push({
      type:'put',
      key:`${user.email}!friendships!${friend}`,
      value:{
        email:user.email,
        target:friend,
        createdAt:new Date
      }
    });
  });
});


db.batch(operations,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log(`Populated ${operations.length} records`);
});