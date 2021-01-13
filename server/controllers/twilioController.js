const fetch = require('node-fetch');
const db = require("../models");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const accountSid = process.env.TWILIO_TEST_ACCOUNT_SID;
// const authToken = process.env.TWILIO_TEST_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const twilioController = {

    send_msg: (id,text) => {

        return client.messages
        // ////TEST SMS
        // // .create({body: 'Hi there!', from: '+15005550006', to: '+18017922844'})
        // ////REAL SMS w/msgService
        .create({
            messagingServiceSid: "MGd9379ff823e0037b1b7a190b6bf564e1",
            body: text,
            // statusCallback: `https://webhook.site/488d8acf-c226-4ad2-9a42-d48dd06adeda/${id}`,
            // statusCallback: `http//localhost:5000/status/${id}`,
            to: "+18017922844"
        });
        // .then(message => res.json(message))
        // .catch(err => console.log(err));
        // res.end();
    },
    send: (req,res) => {

        twilioController.create_campaign(req.body)
        .then(({ id }) => {
            return twilioController.send_msg(id,req.body.text);
        })
        .then(message => res.json(message))
        .catch(error => console.log(error));
    },
    mockaroo_data: async () => {
                
        const response = await fetch('https://api.mockaroo.com/api/b246bc10?count=400&key=1d694940');
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
    upsert_status: (req,res) => {

        const {id} = req.params;
        const data = req.body;
        data.campaignId = id;
        res.json(data);
    }
}

module.exports = twilioController;