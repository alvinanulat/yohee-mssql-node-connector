const sql = require("mssql");
require("dotenv").config();
const config = {
  user: process.env.dbuser, // Replace with your SQL Server username
  password: process.env.dbpass, // Replace with your SQL Server password
  server: process.env.dbserver, // Replace with your SQL Server hostname or IP
  database: process.env.dbname, // Replace with your database name
  options: {
    enableArithAbort: true, // Explicitly set to true
  },
};

async function connectToDatabase() {
  try {
    const connection = await sql.connect(config);
    console.log("Successfully connected to SQL Server database");
    return connection;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error; // Re-throw to propagate the error if necessary
  }
}

async function executeQuery(cmdString) {
  try {
    const connection = await connectToDatabase();
    const result = await connection.request().query(cmdString); // Replace with your desired query

    console.log(result.rowsAffected); // Print the retrieved data in the console
    // Use the connection object to interact with your database
    await connection.close(); // Remember to close the connection when done
  } catch (error) {
    console.error("Error:", error);
  }
}
async function selectQuery(cmdString) {
  try {
    const connection = await connectToDatabase();
    const result = await connection.request().query(cmdString); // Replace with your desired query
    console.log(result.recordset);

    // Print the retrieved data in the console
    // Use the connection object to interact with your database
    await connection.close(); // Remember to close the connection when done
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = { connectToDatabase, executeQuery, selectQuery };
