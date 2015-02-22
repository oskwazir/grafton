/**
 * Created by omer on 2/21/15.
 */
const db = require('./sublevels').base.sublevel('userchanges');

const email = process.argv[2];

const userChanges = db.sublevel(email);

userChanges.createValueStream()
.on('data',function(message){
        'use strict';
        console.log(`User Change:${JSON.stringify(message)}`);
    })
.on('end',function(){
        'use strict';
        console.log('end of changes.');
    });