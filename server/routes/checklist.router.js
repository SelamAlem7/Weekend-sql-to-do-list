const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool.js');//added '.js'
/////////////////////////////////////////////////////////////////
 
//creating a request to GET all checklist
router.get('/', (req, res) => {
    console.log('in clients GET router ');

    let queryText = 'SELECT * FROM "checklist" ORDER BY "task";';
    pool.query(queryText).then(result => {
        res.send(result.rows)
    })
    .catch(error => {
        console.log('Error in client GET router to get all books', error);
        res.sendStatus(500);
 
    });
    
});









/////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////























/////////////////////////////////////////////////////////////////
module.exports = router;
/////////////////////////////////////////////////////////////////
