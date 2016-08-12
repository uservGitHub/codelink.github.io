/**
 * Created by work on 2016/8/11.
 */

describe("db.js",function(){
    var db = require('../../src/db');
    var path = require('path');
    var directory = __dirname;

    it("该文件路径存在\t"+directory,function(){
        expect(directory).not.toBeUndefined();
    });

    it("dbfile\t"+db.dbfile,function(){
        var dbpath = path.join(__dirname,'../../data','first.db');
        expect(db.dbfile).toBe(dbpath);
    });

    describe("db",function(){
        it("db 是对象",function(){
            expect(db.db).toEqual(jasmine.any(Object));
        });
        it("db.run 是函数",function(){
            expect(db.db.run).toEqual(jasmine.any(Function));
        });

        describe("操作db",function(){
            var ret;
            beforeAll(function(){
                spyOn(db.db,'run').and.callThrough();
                ret = db.db.run("create table a(name text);");
            });

            it("建一个表",function(){
                expect(db.db.run).toHaveBeenCalledTimes(1);
                expect(db.db.run).toEqual(jasmine.any(Function));
                expect(ret).toEqual(jasmine.any(Object));
            });
        });


    })
});