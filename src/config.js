const {confing} = require('dotenv');
config();

module.exports = {
    // Server Config 
    port: process.env.port || 3000,
    // Database Config
    UserDB: process.env.UserDB,
    PasswordDB: process.env.PasswordDB,
    ServerDB: process.env.ServerDB,
    Database: process.env.Database,
    PortDB: process.env.PortDB,
}