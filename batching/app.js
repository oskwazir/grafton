const db = require('./db');
const batch = db.batch();
const presidents = ['George Washington','John Adams','Thomas Jefferson'];
const operations = presidents.map(function(name,index){
    "use strict";
    return {type:'put', key:`${index+1}`,value:name}
});

batch.put('key 1', 'value 1');
batch.put('key 2', 'value 2');
batch.del('key 3'); //Does not exist
batch.write(function(err){
    "use strict";
    if(err) {
        console.log(err);
        return;
    }
    console.log('First Batch Job Complete!')
});

db.batch(operations, function(err){
    "use strict";
    if(err) {
        console.log(err);
        return;
    }
    console.log('Second Batch Job Complete!')
});
