const level = require('level');
const path = require('path');
const SubLevel = require('level-sublevel');

const dbPath = process.env.DB_PATH || path.join(__dirname,'graftonDB');
const db = SubLevel(level(dbPath,{
    valueEncoding:'json'
}));

exports.base = db;
exports.users = db.sublevel('users');
exports.messages = db.sublevel('messages');

require('./sublevels_user_hook');