const mysql = require('mysql2/promise');
const config = require('../config.js');
const { createPool } = require('mysql2');

const dbauth = {
    host: config.ServerDB,
    user: config.UserDB,
    password: config.PasswordDB,
    database: config.DatabaseDB,
    port: config.PortDB,
    waitForconections: true,
    connectinLimt: 10,
    queueLimit: 0
};  

async function getConnection(){
    const pool = mysql.createPool (dbauth);
    return createPool; 
}

module.exports = getConnection;

