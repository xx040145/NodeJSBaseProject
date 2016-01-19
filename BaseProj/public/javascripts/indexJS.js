/**
 * Created by zhangke on 15/12/28.
 */
var serverHttp = "http://localhost:3000/";

function requestServer (){
    $.post(serverHttp,{"a":1,"b":2},function(rs){
        $("body").html(rs.aa);
    });
}

function getUsers (){
    //pageIndex要设置变量，这里只为了展示前后端，以及和数据库之间的数据交互
    $.post(serverHttp+"getUsers",{"pageIndex":"1"},function(rs){
        /*
        {
        status: true,
        users: [
                { id: 1, name: 'littleA', sex: 1 },
                { id: 2, name: 'littleB', sex: 0 } ]
        }
        */
        if (rs.status){
            if (rs.users.length){
                for(var i=0;i<rs.users.length;i++){
                    var sex = rs.users[i].sex==1?"男":"女";
                    var html = '<tr>' +
                        '<td>'+rs.users[i].id+'</td>' +
                        '<td>'+rs.users[i].name+'</td>' +
                        '<td>'+sex+'</td>' +
                        '</tr>';
                    $("#user_table").append(html);
                }
            }else{
                $("body").html("没有信息");
            }
        }else {
            $("body").html("查询失败");
        }
    });
}