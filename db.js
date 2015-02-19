const options = {
  keyEncoding: 'hex',
  valueEncoding: 'base64'
}
const level = require('level');
const path = require('path');

const dbPath = process.env.DB_PATH || path.join(__dirname,'graftonDB_hex');
const db = level(dbPath, options);

module.exports = db;

