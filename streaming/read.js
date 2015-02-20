const db = require('./db');
db.createReadStream({
  gte:'qa',
  lte:'r',
  limit:250})
.on('data', function (data) {
  console.log(data.key + '=' + data.value)
});