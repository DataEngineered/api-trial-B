const mysql = require('mysql2/promise');
require('dotenv');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

exports.getUserById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

    if(rows.length > 0){
        const user = rows[0];
        return user;
    }

    return null;
};