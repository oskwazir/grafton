const db = require('./db');
const stream = db.createReadStream();
const presidents = ['George Washington','John Adams','Thomas Jefferson'];
var operations = presidents.map(function(name,index){
    "use strict";
    return {type:'put', key:`${index+1}`,value:name}
});

db.batch(operations, function(err){
    "use strict";
    if(err) {
        console.log(err);
        return;
    }

    stream.on('data', function(data){
        "use strict";
        console.log(`${data.key}:${data.value}`);
    });
});
