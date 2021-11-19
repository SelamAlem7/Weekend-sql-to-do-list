const express = require('express');
const bodyParser = require('body-parser');
const checklistRouter = require('./routes/checklist.router.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));//creats req.body 

app.use('/checklist', checklistRouter);

// Serve back static files by default
app.use(express.static('server/public'))

// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});