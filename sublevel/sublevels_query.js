const db = require('./sublevels');
const email = process.argv[2];

db.users.get(email, function(err,user){
    'use strict';
    if(err){throw err;}
    const userMessages = db.messages.sublevel(email);

    console.log(`user:${user.email}`);
    userMessages.createReadStream()
        .on('data',function(message){
            console.log(`
            From:${message.value.from}
            To:${message.value.to}
            Subject:${message.value.subject}
            Body:${message.value.body}`);
        }).on('end',function(){
            console.log('No more messages.'); });
});
