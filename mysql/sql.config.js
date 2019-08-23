const mysql = require('mysql')
var connection = mysql.createConnection({
    host: '47.98.213.151',
    user: 'root',
    password: 'b6pHzXAEkRbsWzLP',
    database: 'socket'
});

connection.connect();
// 查询
const query = (callback)=>{
    var sql = 'SELECT * FROM USER'
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        callback(results);
        // callback(results)
    });
}

// 插入
const inset = (callback)=>{

    var  addSql = 'INSERT INTO USER(username,intname) VALUES(?,?)';
var  addSqlParams = ['gaolu', '高露'];

connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     return;
    }        

   console.log('--------------------------INSERT----------------------------');
   //console.log('INSERT ID:',result.insertId);        
   console.log('INSERT ID:',result);        
   console.log('-----------------------------------------------------------------\n\n');  
});
}

module.exports = {
    query,inset
}



