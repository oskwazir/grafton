const db = require('./db');
const batch = db.batch();

batch.put('key 1', 'value 1');
batch.put('key 2', 'value 2');
batch.del('key 3'); //Does not exist
batch.write(function(err){
    "use strict";
    if(err) {
        console.log(err);
        return;
    }
    console.log('Batch Job Complete!')
});
