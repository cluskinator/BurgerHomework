// Set up MySQL connection.

//code borrowed from week 14 activity 18 catsapp
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{

    connection = mysql.createConnection({
    port: 3306,
    host: "o61qijqeuqnj9chh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "z3xp4y8d31mx30jp",
    password: "x1ndpqjdgrt2r0k7",
    database: "np7bq6mc2m4itq6g"
  });

}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
