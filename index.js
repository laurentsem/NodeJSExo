const express = require('express')
const middlewares = require('./middlewares')
const defaultRouter = require('./routes')

const app = express()

app.disable('x-powered-by')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(middlewares.printReq)

app.get('/', middlewares.printReq, (request, response) => {
    response.json({ success: true })
})

app.post('/', (req, res) => {
    res.json({ success: true })
})

app.use('/api', defaultRouter)


app.listen(4021, () => {
    console.log('Listening on http://localhost:4021')
})


