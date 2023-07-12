const express =  require('express')

const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(
    cors({
      origin: ["http://localhost:3001"],
      methods: ["GET", "POST", "PUT"],
      credentials: true,
    })
  );



  //--ROUTES---
  
  const users = require('./routes/users')
  //const profile = require('./routes/profile')
  
  app.use('/api/users', users)

  const PORT = process.env.PORT
  
  app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT} `)
  })