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

app.get('/api/v1/bebeoncqualitydomain', quality.BcBeoncQualityDomain)
app.get('/api/v1/bebeoncsignalfunction', quality.BcBeoncSignalFunction)
app.get('/api/v1/ceoncsignalfunction', quality.CeoncSignalFunction)
app.get('/api/v1/ceoncqualitydomain', quality.CeoncQualityDomain)

app.get('/api/v1/hfimplement', coaching.hfImplement)
app.get('/api/v1/knowledgeskill', coaching.knowledgeSkill)

app.listen(process.env.PORT || 4000, 
	() => console.log("Server is running..."));