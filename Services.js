const dbPromise = require('./Connection'); // This is now a promise


async function getData() {
    console.log("In Services...");
    const queryString = 'SELECT *FROM story WHERE status=1 ORDER BY storyId DESC';
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
    const queryString = `SELECT * FROM story where storyId=${id} ASC`;
    try {
        const db = await dbPromise; // Wait for the db connection to resolve
        const [results] = await db.query(queryString); // Use db.query with await
        return results;
    } catch (err) {
        console.error('Error:', err);
        throw err; // Let the route handler catch this error
    }
}

async function deleteDataById(id){
        const queryString = `UPDATE story SET status=0 WHERE storyId=${id}`;
        try {
            const db = await dbPromise; // Wait for the db connection to resolve
            const [results] = await db.query(queryString); // Use db.query with await
            return results;
        } catch (err) {
            console.error('Error:', err);
            throw err; // Let the route handler catch this error
        }
}

async function editData(data){
    const queryString = `UPDATE story SET title='${data.title}',author='${data.author}',content='${data.content}',image='${data.image}' WHERE storyId=${data.storyId}`;
    try {
        const db = await dbPromise; // Wait for the db connection to resolve
        const [results] = await db.query(queryString); // Use db.query with await
        return results;
    } catch (err) {
        console.error('Error:', err);
        throw err; // Let the route handler catch this error
    }
}

async function saveData(data){
    const queryString = `INSERT INTO story(title,author,content,status) VALUES(?,?,?,1)`;
    const queryParams = [data.title,data.author,data.content,data.status];
    console.log("saveData:",queryParams);
    
    try {
        const db = await dbPromise; // Wait for the db connection to resolve
        const [results] = await db.query(queryString, queryParams); // Use db.query with prepared statement
        return results;
    } catch (err) {
        console.error('Error:', err);
        throw err; // Let the route handler catch this error
    }
}

async function signUp(data) {
    const queryString = 'INSERT INTO users(userName,userEmail,userPassword,userRole,createdBy) VALUES(?,?,?,?,"user")';
    const queryParams = [data.userName,data.userEmail,data.userPassword,data.userRole,data.createdBy];
    console.log("signUpData:",queryParams);
    

    try {
        const db = await dbPromise; // Wait for the db connection to resolve
        const [results] = await db.query(queryString,queryParams); // Use db.query with await
        return results;
    } catch (err) {
        console.error('Error:', err);
        throw err; // Let the route handler catch this error
    }
}


module.exports={getData, getDataById, deleteDataById, saveData,editData,signUp};