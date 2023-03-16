const connectToMongo = require('./db');
require('dotenv').config()
connectToMongo();
var cors = require('cors') 

const express = require('express')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/api/users', require('./routes/users'))
app.use("/api/posts", require('./routes/posts'));
app.use("/api/comments", require('./routes/comments'));
app.use("/api/messages", require('./routes/messages'));


app.listen(port, () => {
  console.log(`connected: port: ${port}`)
})