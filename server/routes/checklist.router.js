const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool.js');//added '.js'
/////////////////////////////////////////////////////////////////
 

/////////////////////////START 'GET' ROUTER//////////////////////////////////////
//creating a respond to our client to GET all tasks in our checklist
router.get('/', (req, res) => {
    console.log('in clients GET router ');

    let queryText = 'SELECT * FROM "checklist" ORDER BY "task";';
    pool.query(queryText).then(result => {
        res.send(result.rows)//here we are sending out response from the database to our client
    })
    .catch(error => {
        console.log('Error in client GET router to get all tasks', error);
        res.sendStatus(500);
 
    });
    
});
/////////////////////////END 'GET' ROUTER//////////////////////////////////////


/////////////////////////START 'DELETE' ROUTER//////////////////////////////////////
router.delete('/:id', (req,res) => {//this corresponds to the URL on the client's side
    //console.log('inside DELETE in router');
    console.log('req.params: Deleted the following:', req.params);
    
    const taskToDelete = req.params.id;
    
    const sqlText = `
    DELETE FROM "checklist"
    WHERE "id" = $1;
    `;

    const sqlValues = [taskToDelete];

    pool.query(sqlText, sqlValues)
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in DELETE route', error);
        res.sendStatus(500);
        
    })

});

/////////////////////////END 'DELETE' ROUTER//////////////////////////////////////

/////////////////////////START 'POST' ROUTER//////////////////////////////////////
router.post('/', (req, res) => {
    console.log('inside POST router!');

//Creating a newTask variable & giving it the value of the users input:
    let newTask = req.body;
    console.log('Your new task is:', newTask);

    let queryText = `INSERT INTO "checklist" ("task", "due_date)
                     VALUES ($1, %2);`;
    
    pool.query(queryText, [newTask.task, newTask.due_date])
    .then(result => {
        res.sendStatus(201);
        //console.log('Your new task is:', newTask);
    })
    .catch(error => {
        console.log('Error adding new task - POST', error);
        res.sendStatus(500);
    });
   
});

/////////////////////////END 'POST' ROUTER//////////////////////////////////////

/////////////////////////START 'PUT' ROUTER//////////////////////////////////////
router.put('/complete/:id', (req, res) => {
    console.log( 'inside PUT router', req.params.id);
    //console.log(req.body);
  const taskToUpdate = req.params.id;
    let currentCompletedStatus = req.body.currentCompletedStatus;
    currentCompletedStatus = true;
    // let newValue = req.body.read;
  
    const sqlText = `
        UPDATE "checklist" 
          SET "completed" = $1
          WHERE "id" = $2;
        `;

        const sqlValues = [
            currentCompletedStatus,
            taskToUpdate
          ];
        
    pool.query(sqlText, sqlValues)
      .then((result) => {
        console.log('result is ', result);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error(error);
      });
  });

/////////////////////////END 'PUT' ROUTER//////////////////////////////////////

/////////////////////////END ' ' ROUTER//////////////////////////////////////












/////////////////////////END 'GET' ROUTER//////////////////////////////////////
/////////////////////////END 'GET' ROUTER//////////////////////////////////////























/////////////////////////////////////////////////////////////////
module.exports = router;
/////////////////////////////////////////////////////////////////
