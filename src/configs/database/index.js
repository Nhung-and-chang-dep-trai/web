
var mysql = require('mysql2/promise');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'nhom12',
    password : '1',
    database: 'shop',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports.query= async function (query)
{   
    try{
        var Data = await pool.query(query);
        table=Data[0];
        return table;
    }catch (err){
        throw err;
    }
}