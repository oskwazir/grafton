/**
 * Created by omer on 2/21/15.
 */
const cuid = require('cuid');
const db = require('./sublevels');
const userChanges = db.base.sublevel('userchanges');

db.users.pre(function(change,add){
    'use strict';
    add({
        type:'put',
        key:cuid(),
        value:{
            when: new Date(),
            change: change
        },
        prefix: userChanges.sublevel(change.key)
    });
});