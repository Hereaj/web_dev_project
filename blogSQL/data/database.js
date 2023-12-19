const mysql = require('mysql2/promise');

const pool = mysql.createPool( {
    host: 'localhost',
    database: 'blog_post',
    user: 'root',
    password: 'Twohyeons123!'
});

module.exports = pool;