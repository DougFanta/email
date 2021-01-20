const {sendEmail} = require('../config/emailConfig')

module.exports = {
    key: 'envioDeEmail',
    async handle( {data} ){
        await sendEmail({
            from:`${data.nomeRemetente} <${data.emailFrom}>`,
            to: data.emailTo,
            subject: data.subject,
            text: data.mensagem,
            html: `<p>${data.mensagem}</p>`
        })
    }
}