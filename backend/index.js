const express = require('express')
const bodyParser = require('body-parser')

const quality = require('./quality')
const coaching = require('./coaching')

const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

app.get('/bebeoncqualitydomain', quality.BcBeoncQualityDomain)
app.get('/bebeoncsignalfunction', quality.BcBeoncSignalFunction)
app.get('/ceoncsignalfunction', quality.CeoncSignalFunction)
app.get('/ceoncqualitydomain', quality.CeoncQualityDomain)

app.get('/hfimplement', coaching.hfImplement)
app.get('/knowledgeskill', coaching.knowledgeSkill)