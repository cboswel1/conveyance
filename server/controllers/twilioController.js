const fetch = require('node-fetch');
const { sequelize } = require('../models');
const db = require("../models");
const volunteersController = require('./volunteersController');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const accountSid = process.env.TWILIO_TEST_ACCOUNT_SID;
// const authToken = process.env.TWILIO_TEST_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const twilioController = {

    send_msg: (messageList) => {
        const { text, id } = messageList[0].campaign;
        const volunteerId = messageList[0].id;
        const phone = `+1${messageList[0].phone}`;
        
        return client.messages
        // ////TEST SMS
        // // .create({body: 'Hi there!', from: '+15005550006', to: '+18017922844'})
        // ////REAL SMS w/msgService
        .create({
            messagingServiceSid: "MGd9379ff823e0037b1b7a190b6bf564e1",
            body: text,
            // statusCallback: `https://webhook.site/488d8acf-c226-4ad2-9a42-d48dd06adeda/${id}`,
            statusCallback: `https://fefe7193d4cf.ngrok.io/api/twilio/status/${volunteerId}/${id}`,
            to: phone
        });
    },
    get_volunteers: (dataValues) => {
        return new Promise((resolve,reject) => {
            db.volunteer.findAll({raw:true})
            .then(volunteers => {
                const messageList = volunteers.map(volunteer => {
                    volunteer.campaign = dataValues;
                    return volunteer;
                });
                resolve(messageList);
            })
            .catch(error => reject(error));
        })
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
    send: (req,res) => {

        twilioController.create_campaign(req.body)
        .then(({dataValues}) => {
            twilioController.get_volunteers(dataValues)
            .then(messageList => {
               return twilioController.send_msg(messageList)
            })
            .then(response => {
                delete response.subresourceUris;
                return twilioController.post_sms(response);
            })
            .then(sms => res.json(sms))
            .catch(error => console.log(error));
        });
    },
    post_sms: async (sms) => {
        return await db.sms.create(sms);
    },
    mockaroo_data: async () => {
                
        const response = await fetch('https://api.mockaroo.com/api/b246bc10?count=100&key=1d694940');
        const json = await response.json();

        try {
            return json;
        } catch (error) {
            console.log(error);
        }
    },
    get_campaigns: async (req,res) => {

        const campaigns = await db.campaign.findAll({
            raw: true,
            attributes: ["id", "title", "text", "dateSent"]
        });

        try {
            res.json(campaigns);
        } catch (error) {
            console.log(error);
        }
        // console.log(users.every(user => user instanceof User)); // true
        // console.log("All users:", JSON.stringify(users, null, 2));
    },
    create_campaign: async (campaign) => {
        // console.log(campaign);
        return await db.campaign.create(campaign);
        // console.log("Jane's auto-generated ID:", jane.id);
    },
    create_text: async (text) => {
        console.log(text)
        return await db.sms.create(text);
    },
    create_texts: async (texts) => {

        return await db.sms.bulkCreate(texts);
    },
    bulk_sms: (req,res) => {

        twilioController.mockaroo_data()
        .then(twilioController.create_texts)
        .then(sms => res.json({created: sms.length}))
        .catch(error => console.log(error));
    },
    sms_find_create: async (req,res) => {
        const [user, created] = await User.findOrCreate({
            where: { username: 'sdepold' },
            defaults: {
              job: 'Technical Lead JavaScript'
            }
          });
          console.log(user.username); // 'sdepold'
          console.log(user.job); // This may or may not be 'Technical Lead JavaScript'
          console.log(created); // The boolean indicating whether this instance was just created
          if (created) {
            console.log(user.job); // This will certainly be 'Technical Lead JavaScript'
          }

    },
    upsert_status: (req,res) => {

        const {volunteerId, campaignId} = req.params;
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
    get_stats: async (req,res) => {
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