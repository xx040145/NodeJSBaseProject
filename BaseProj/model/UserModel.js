/**
 * Created by zhangke on 15/12/31.
 */
var db_connection = require('../bin/dbConfig').db_connect();
db_connection.connect();

exports.getUsersMethod = function(limitA,limitB,rs){
    db_connection.query('select * from user limit '+limitA+','+limitB, function(err, rows, fields) {
        //console.log('getUsersMethod result is：', rows);
        if (err) {
            //输出错误信息，返回status为false
            //throw err;
            console.log("getUsersMethod err："+err);
            rs({status:false});
        }else {
            rs({status:true,users:rows});
        }
    });
};