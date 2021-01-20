const dotenv = require('dotenv')
const express = require('express')
const app = express()



//Configuração da .env
dotenv.config({path: './config/.env'})

//Body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Rota para envio de email
app.use('/email', require('./routes/email'))

//Setando a porta
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server Rodando na porta ${PORT}`))