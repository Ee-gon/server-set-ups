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




//set up a test route
app.get('/', (req, res) => {
    res.send("Hello World");
});

//actually start the Express server 
app.listen(port, () => {
    console.log('Server is running on port ' + port);
    console.log('Press Ctrl+C to quit.');
});

//what the hell is this?