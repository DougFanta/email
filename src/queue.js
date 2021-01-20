const dotenv = require('dotenv')
dotenv.config({path: './config/.env'})

const Queue = require('../config/queue')
const envioDeEmail = require('../jobs/envioDeEmail')

Queue.process(envioDeEmail.handle)