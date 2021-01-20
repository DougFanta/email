const express = require('express')
const router = express.Router()
const Queue = require('../config/queue')

//rota para envio de email
router.post('/send', async (req, res) => {
    
    try{
        await Queue.add(req.body,{attemps: 3})
        res.sendStatus(200)

    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router
