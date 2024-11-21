const dbPromise = require('./Connection'); // This is now a promise

async function getData() {
    console.log("In Services...");
    const queryString = 'SELECT * FROM story';
    try {
        const db = await dbPromise; // Wait for the db connection to resolve
        const [results] = await db.query(queryString); // Use db.query with await
        return results;
    } catch (err) {
        console.error('Error:', err);
        throw err; // Let the route handler catch this error
    }
}

async function getDataById(id) {
    console.log("In getDataById:",id);
    const queryString = `SELECT * FROM story where storyId=${id}`;
    try {
        const db = await dbPromise; // Wait for the db connection to resolve
        const [results] = await db.query(queryString); // Use db.query with await
        return results;
    } catch (err) {
        console.error('Error:', err);
        throw err; // Let the route handler catch this error
    }
}
module.exports={getData, getDataById};