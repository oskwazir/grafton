'use strict';
const db = require('./db');
const email = process.argv[2];

function user(email,cb){
  db.get(email,cb);
}

function friendships(email){
  var key  = `${email}!friendships!`;
  return db.createValueStream({
    gte:key,
    lte:`${key}\xff`
  });
}

user(email,function(err, user){
  if(err){ throw err; }
  console.log(`User:${user.email}`);
  const friends = friendships(email)
      .on('data',function(friend){
        console.log(`friend:${friend.target}`);})
      .on('end',function(){
    console.log('No more friends :(');
  });
});
