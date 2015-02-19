const level = require('level');
const path = require('path');
level(path.join(__dirname,'graftonDB_hex')).createReadStream()
  .on('data',function(data){
    console.log(data.key+'='+data.value);
  })
  .on('error', function(err){
    console.error(err);
  })