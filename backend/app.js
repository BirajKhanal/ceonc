const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const quality = require('./quality')
const coaching = require('./coaching')

const app = express()
app.use(cors())
// const port = 4000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
// })

app.get('/bebeoncqualitydomain', quality.BcBeoncQualityDomain)
app.get('/bebeoncsignalfunction', quality.BcBeoncSignalFunction)
app.get('/ceoncsignalfunction', quality.CeoncSignalFunction)
app.get('/ceoncqualitydomain', quality.CeoncQualityDomain)

app.get('/hfimplement', coaching.hfImplement)
app.get('/knowledgeskill', coaching.knowledgeSkill)

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));