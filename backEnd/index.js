require('dotenv').config()
var cors = require('cors')
const express = require('express')
const path = require('path')
const bodyParser=require('body-parser')

require('./module/awsClient/awsClient')
const todoRouter=require('./module/todo/router')

const PORT = process.env.PORT || 5000


express()
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/express/api/todo',todoRouter)
  //react static folder
  .use(express.static(path.join(__dirname, '../dist')))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../dist' ,'index.html'));
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))