// const passport = require("passport");
// const db = require("../models");
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// const twilioController = {

//     send_text: (req,res) => {
//         client.messages
//         ////TEST SMS
//         // .create({body: 'Hi there!', from: '+15005550006', to: '+18017922844'})
//         ////REAL SMS w/msgService
//         .create({
//             messagingServiceSid: "MGd9379ff823e0037b1b7a190b6bf564e1",
//             body: "Waz up! This msg cost you money.",
//             to: "+18017922844"
//         })
//         .then(message => res.json(message))
//         .catch(err => console.log(err));
//     }
// }

// module.exports = twilioController;