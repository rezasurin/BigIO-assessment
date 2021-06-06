const express = require('express')
const cors = require('cors')
const app = express()

const port = 4000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const db = require("./models")
const dbConfig = require('./config/db.config')
const Role = db.role

db.mongoose
.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB.")
  initial()
})
.catch((err) => {
  console.log("connection error", err)
  process.exit()
})

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log(err)
        }
  
        console.log("added 'user' to Roles collection ")
      })

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log(err)
        }
  
        console.log("added 'admin' to Roles collection ")
      })

      new Role({
        name: "teacher"
      }).save(err => {
        if (err) {
          console.log(err)
        }
  
        console.log("added 'teacher' to Roles collection ")
      })

      new Role({
        name: "student"
      }).save(err => {
        if (err) {
          console.log(err)
        }
  
        console.log("added 'student' to Roles collection ")
      })
    }
  })
}

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
