const assert = require('assert');
const db = require('./db');
var index = 0;

const operations = [
  {type:'put',key:'a',value:'A'},
  {type:'put',key:'b',value:'B'},
  {type:'put',key:'c',value:'C'},
  {type:'put',key:'d',value:'D'},
  {type:'put',key:'e',value:'E'}
];

const onData = function(record){
  console.log(`read: ${record.key}:${record.value}`);
  assert.equal(record.value, operations[index++].value);
}

db.batch(operations,function(err){
  var stream;
  if(err){
    console.log(err);
    return;
  }
  console.log('First batch write concluded');
  db.createReadStream({gte:'a',lte:'e'})
  .on('data',onData)

  db.batch(operations.map(function(op){
    return {
      type:op.type,
      key:op.key,
      value:op.value.toString('hex')}
    }), function(err){
          if(err){
            console.log(err);
            return;
          }

          console.log('Batch rewrite concluded.')
       });
});