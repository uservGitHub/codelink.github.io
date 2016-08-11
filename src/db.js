/**
 * Created by work on 2016/8/11.
 * 提供全局的db,应先于其他模块执行
 */
var sqlite3 = require('sqlite3').verbose();
var path = require('path');
var fs = require('fs');
var pgk = require('../package.json');

const dbfile = path.join(__dirname,'../data',pkg.dbfile);

const exists = fs.existsSync(dbfile);

if(!exists){
    fs.openSync(dbfile,'w');
}
var db = new sqlite3.Database(dbfile);

//初始化数据库
if(!exists){
    var dbconfig = require('./dbconfig');
    dbconfig.init.forEach(function(sql){
        db.run(sql);
    });
}

Object.defineProperty(exports,'db',{
    get:function(){
        return db;
    }
});

Object.defineProperty(exports,'dbfile',{
    get:function(){
        return dbfile;
    }
});
