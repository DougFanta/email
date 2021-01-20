const {google} = require('googleapis')
const nodemailer = require('nodemailer')

const credenciais = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI)

credenciais.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

async function sendEmail(emailConfig){
    try {
        const accesToken = await credenciais.getAccessToken()
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'douglassoares.silva47@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                acessToken: accesToken
            }
        })
        const result = await transport.sendMail(emailConfig)

        return result

    } catch (error) {
        return error
    }
}

module.exports = {
    sendEmail
}