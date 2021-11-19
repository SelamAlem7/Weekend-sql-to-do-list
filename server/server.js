const express = require('express');
const bodyParser = require('body-parser');
const checklistRouter = require('./routes/checklist.router.js');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));//creats req.body 
app.use('/checklist', checklistRouter);
app.use(express.static('server/public'))
const PORT = process.env.PORT || 5000;
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});