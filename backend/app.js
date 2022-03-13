const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const data = require("./routes")

// routes
app.use("/", data)

app.listen(process.env.PORT || 4000, 
	() => console.log("Server is running..."));