const express = require('express')
const cors = require('cors')
const logger = require('morgan');
require('dotenv').config()
const route = require('./routes')
// const database = require('./configs/database');
const path = require('path');

const app = express()
const port = process.env.PORT || 5000

// Middle ware
app.use(express.urlencoded({
  extended : true
}))

//config sử dụng ejs
app.set('view engine', 'ejs');
//set path views
app.set('views',path.join(__dirname,'resources','views'))

app.use(express.static(path.join(__dirname,'public')));

app.use(logger('dev'));
app.use(cors())
app.use(express.json());

//routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})