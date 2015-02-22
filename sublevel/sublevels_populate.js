//const cuid = require('cuid');
const db = require('./sublevels');
const inboxes = require('./sublevels_insert_message');

const getNewUserID = function getNewUserID(){
    'use strict';
    return Math.floor(Math.random() * 100)
}
const user = {
    name:'Foo Manchu',
    email:`user1@example.com`
};

const createMessages = function createMessages(){
    'use strict';
    for(var i = 0; i < 5;i+=1){
        //var userMessages = db.messages.sublevel(user.email);
        inboxes.insert({from:`user${getNewUserID()}@example.com`,
                          to:user.email,
                          subject:'Hey!',
                          body:'How you doing buddy?'});
    }
};

db.users.put(user.email,user,function(err){
    'use strict';
    if(err){throw err;}
    createMessages();
});