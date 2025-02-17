import express from 'express';
import cors from 'cors';
import mysql from 'mysql2'; 
import bodyParser from 'body-parser';
import 'dotenv/config';

//const db = mysql.createConnection();

// set up the actual express  application
const app = express(); 

// select the port for your application
//just use 3000 please
const port = 3000;

//setting up necessary information for the MySQL server connection
const db = mysql.createConnection ({
    host: 'thresholds-test.mysql.database.azure.com',
    user: 'egonzalez', //MySql username (first initial + last name)
    port: '3306',     //Replace with your port number (if not 3306) but 3306 is the default port
    password: 'test', //MySql password
    database: 'egonzalez_tasks' //MySql database name 
});

//actually establishes the database connection
db.connect((err) => {
    if (err) {
        console.log('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database');
});


//set up a test route
//req is short for request
//res is short for response
//this is a simple route that sends a response back to the user
app.get('/', (req, res) => {
    res.send("Hello World");
});

//GET request to get all tasks from the database
//app.get('/x') - x/ is the URL added to the end of localhost:3000
app.get('/tasks', (req,res) => {
    //write the querey
    const query = "SELECT * FROM tasks; ";
    //make query run
    db.query(query, (err, results) => {
        //handle the query passing in the parameters from the body
        if(err) {
            console.log(`whoops! could not get tasks, error mesage is ' ${err}'`);
            res.status(500).json({error: 'Error retrieving tasks.'});
        } 
        else {
            console.log(results[0]);
            res.json(results);
                                                 
        }
    })
});

//actually start the Express server 
//this has to be at the end of the file
app.listen(port, () => {
    console.log('Server is running on port ' + port);
    console.log('Press Ctrl+C to quit.');
});

