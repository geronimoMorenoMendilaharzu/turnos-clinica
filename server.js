const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')
const routesMedicos = require('./routesMedicos')


const app = express()

app.set('port', 3005)

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'turnos'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())
// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/pacientes', routes)
app.use('/medicos', routesMedicos)


// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})