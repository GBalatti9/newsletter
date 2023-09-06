const nodeCron = require('node-cron');
const sendEmails = require('../mails/sendEmails');
const { Newsletter, WriterSuscriber, Writer, Sequelize } = require('../database/models');

const findAndSendEmails = async () => {

    const currentDatetime = new Date();
    const writer = await Writer.findByPk(1);
    const suscribers = await writer.getSuscriptores();
    const emails = suscribers.map(suscriptor => suscriptor.email);
    console.log('CRON CONFIG', emails);
    let html = `<h1>Prueba mail programado</h1>`

    try {
        const findNewsletterToRelease = await Newsletter.findOne({
            where: {
                send: 0,
            }
        });
        // console.log(findNewsletterToRelease.release_date);
        if (findNewsletterToRelease) {
            console.log('CRON CONFIG', findNewsletterToRelease);

            let dateToSend = findNewsletterToRelease.release_date;
            const year = dateToSend.getFullYear();
            const month = dateToSend.getMonth() + 1;
            const day = dateToSend.getDate();
            const hour = dateToSend.getHours();
            const minute = dateToSend.getMinutes();
            const seconds = dateToSend.getSeconds();

            const cronTime = `${seconds} ${minute} ${hour} ${day} ${month} 3`

            console.log(cronTime);
            nodeCron.schedule(cronTime, async () => {
                emails.forEach(async email => {
                    await sendEmails('Prueba', html, findNewsletterToRelease.content, email);

                })
                await findNewsletterToRelease.update({ send: 1 })
                console.log('CRON CONFIG: programado correctamente');
            })
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = ({ findAndSendEmails });