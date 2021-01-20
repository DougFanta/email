//Importação das configurações do redis e importação da fila
const Queue = require('bull')
const redisConfig = require('./redis')

//Importação do Job
const envioDeemails = require('../jobs/envioDeEmail')

//criação da Queue
const emailQueue = new Queue(envioDeemails.key, redisConfig)

emailQueue.on('failed', (job) =>{
    console.log('Job, failed', job.name, job.data)
})

module.exports = emailQueue

