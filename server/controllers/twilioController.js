const fetch = require('node-fetch');
const { sequelize } = require('../models');
const db = require("../models");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const accountSid = process.env.TWILIO_TEST_ACCOUNT_SID;
// const authToken = process.env.TWILIO_TEST_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const twilioController = {

    send_msg: (msg) => {
        const { text, id } = msg.campaign;
        const volunteerId = msg.id;
        const phone = `+1${msg.phone}`;
        const name = msg.firstname;

        return client.messages
            .create({
                messagingServiceSid: "MGd9379ff823e0037b1b7a190b6bf564e1",
                body: `Hello ${name}, this is a message from Conveyance: ${text}`,
                // statusCallback: `https://c176d744d02c.ngrok.io/api/twilio/status/${volunteerId}/${id}`,
                statusCallback: `https://damp-shelf-48967.herokuapp.com/api/twilio/status/${volunteerId}/${id}`,
                to: phone
            });
    },
    send: (req, res) => {
        console.log(req.body);
        twilioController.create_campaign(req.body.campaign)
            .then(({ dataValues }) => {
                return twilioController.get_volunteers(dataValues);
            })
            .then(messageList => {
                console.log(messageList);
                messageList.forEach(msg => {
                    twilioController.send_msg(msg)
                        .then(response => {
                            delete response.subresourceUris;
                            return twilioController.post_sms(response);
                        })
                        .then(sms => console.log(sms))
                        .catch(error => console.log(error));
                });
            }).catch(error => console.log(error));
        res.json({ texts: "sent" });
    },
    get_volunteers: (dataValues) => {
        return new Promise((resolve, reject) => {
            db.volunteer.findAll({ raw: true })
                .then(volunteers => {
                    const messageList = volunteers.map(volunteer => {
                        volunteer.campaign = dataValues;
                        return volunteer;
                    });
                    resolve(messageList);
                })
                .catch(error => reject(error));
        });
    },
    formatDate: (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    },
    post_sms: async (sms) => await db.sms.create(sms),
    mockaroo_data: async () => {
        const response = await fetch('https://api.mockaroo.com/api/b246bc10?count=100&key=1d694940');
        const json = await response.json();

        try {
            return json;
        } catch (error) {
            console.log(error);
        }
    },
    campaign_mockaroo_data: async () => {
        const response = await fetch('https://api.mockaroo.com/api/a2af0560?count=100&key=1d694940');
        const json = await response.json();

        try {
            return json;
        } catch (error) {
            console.log(error);
        }
    },
    get_campaigns: async (req, res) => {
        const campaigns = await db.campaign.findAll({
            raw: true,
            attributes: ["id", "title", "text", "dateSent"],
            order: [
                ["dateSent", "DESC"]
            ]
        });

        try {
            res.json(campaigns);
        } catch (error) {
            console.log(error);
        }
    },
    create_campaigns: async (campaigns) => await db.campaign.bulkCreate(campaigns),
    bulk_campaigns: (req, res) => {
        twilioController.campaign_mockaroo_data()
            .then(twilioController.create_campaigns)
            .then(campaigns => res.json({ created: campaigns.length }))
            .catch(error => console.log(error));
    },
    create_campaign: async (campaign) => await db.campaign.create(campaign),
    create_text: async (text) => await db.sms.create(text),
    create_texts: async (texts) => await db.sms.bulkCreate(texts),
    bulk_sms: (req, res) => {
        twilioController.mockaroo_data()
            .then(twilioController.create_texts)
            .then(sms => res.json({ created: sms.length }))
            .catch(error => console.log(error));
    },
    update_status: (req, res) => {
        const { volunteerId, campaignId } = req.params;
        const msg = req.body;
        const date = new Date();
        const sms = {
            sid: msg.MessageSid,
            status: msg.MessageStatus,
            to: msg.To,
            messagingServiceSid: msg.MessagingServiceSid,
            accountSid: msg.AccountSid,
            from: msg.From,
            apiVersion: msg.ApiVersion,
            campaignId: campaignId,
            volunteerId: volunteerId,
            dateSent: twilioController.formatDate(date)
        }
        console.log(sms);
        db.sms.update(sms, {
            where: {
                sid: sms.sid
            }
        })
            .then(record => {
                console.log(record);
            })
            .catch(error => console.log(error));
        res.end();
    },
    get_stats: async (req, res) => {
        const stats = await db.sms.findAll({
            attributes: ['status', [sequelize.fn('COUNT', sequelize.col('status')), 'total']],
            group: ['status'],
            // where: {campaignId: req.params.id}
        });

        try {
            res.json(stats);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = twilioController;