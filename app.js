const db = require('./db');
const leviathan= new Buffer('leviathan','utf8').toString('hex');
const leviathanText =  new Buffer(`Man is distinguished, not only by his reason, but by this singular passion from
other animals, which is a lust of the mind, that by a perseverance of delight
in the continued and indefatigable generation of knowledge, exceeds the short
vehemence of any carnal pleasure.`, 'utf8').toString('base64');

db.put(leviathan, leviathanText);

db.get(leviathan, function(err, value){
  if(err) {
    console.error(err);
    return;
  }

  console.log(`Decoded-base-64: ${value}`);
})
 