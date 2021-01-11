const fetch = require('node-fetch');
const db = require("../models");
const Volunteer = db.volunteer;

const volunteersController = {

    mockaroo_data: async () => {
                
        const response = await fetch('https://api.mockaroo.com/api/f42fd920?count=100&key=1d694940');
        return await response.json();
    },
    create_volunteers: async (volunteers) => {

        return await Volunteer.bulkCreate(volunteers);
    },
    bulk_volunteers: (req,res) => {

        volunteersController.mockaroo_data()
        .then(volunteersController.create_volunteers)
        .then(volunteer => res.json({created: volunteer.length}))
        .catch(error => console.log(error));
    }
}

module.exports = volunteersController;