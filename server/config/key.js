module.exports = {
    
    host:process.env.MYSQL_HOST,
    username:process.env.MYSQL_USERNAME,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB_NAME,
    port:process.env.MYSQL_PORT,
    secret: process.env.JWT_SECRET_KEY
};