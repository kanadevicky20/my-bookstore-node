const mysql = require('mysql2/promise'); // Use the promise-based variant

async function initializeDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'employeedb'
        });
        console.log('Connected to Database...');
        return connection;
    } catch (err) {
        console.error('Connection failed:', err.message);
        process.exit(1); // Exit if connection fails
    }
}

module.exports = initializeDatabase();
