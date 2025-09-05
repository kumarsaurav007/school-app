import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",       // change to your MySQL user
  password: "",       // change to your MySQL password
  database: "schooldb", // make sure you created this database
});

