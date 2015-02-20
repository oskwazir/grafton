const db = require('./db');
const split = require('split');
const fs = require('fs');
var operations = [];

fs.createReadStream('./dictionary.txt',{encoding:'utf8'})
.pipe(split())
.on('data', function(chunk){
    //kind of pointless data to be saving but I just wanted a lot of something to batch on
    if(chunk !==''){
        operations.push({
            type:'put',
            key:chunk.toLowerCase(),
            value:chunk});    
    }

})
.on('end',function(){
    console.log(`writing ${operations.length} records.`)
    db.batch(operations, function(err){
        "use strict";
        if(err) {
            console.log(err);
            return;
        }
        console.log('Records saved!');
    })
});


