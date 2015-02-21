/**
 * Created by omer on 2/21/15.
 */
const db = require('./sublevels');
const cuid = require('cuid');

const insertMessage = function insertMessage(message,cb){
    'use strict';
    var id = cuid();

    var batch = [{
        type:'put',
        key:id,
        value:message,
        prefix:db.messages.sublevel(message.from).sublevel('out')
    },{
        type:'put',
        key:id,
        value:message,
        prefix:db.messages.sublevel(message.to).sublevel('in')
    }];

    db.base.batch(batch,cb);
};

exports.insert = insertMessage;