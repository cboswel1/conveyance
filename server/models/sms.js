module.exports = (sequelize, Sequelize) => {
    const Sms = sequelize.define("sms", {
        campaignId: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        volunteerId: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        body: {
            type: Sequelize.STRING
        },
        numSegments: {
            type: Sequelize.INTEGER
        },
        direction: {
            type: Sequelize.STRING,
        },
        from: {
            type: Sequelize.STRING
        },
        to: {
            type: Sequelize.STRING
        },
        dateUpdated: {
            type: Sequelize.DATE
        },
        price: {
            type: Sequelize.STRING
        },
        errorMessage: {
            type: Sequelize.STRING
        },
        uri: {
            type: Sequelize.STRING
        },
        accountSid: {
            type: Sequelize.STRING
        },
        numMedia: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING
        },
        messagingServiceSid: {
            type: Sequelize.STRING
        },
        sid: {
            type: Sequelize.STRING
        },
        dateSent: {
            type: Sequelize.DATEONLY
        },
        dateCreated: {
            type: Sequelize.DATEONLY
        },
        errorCode: {
            type: Sequelize.INTEGER
        },
        priceUnit: {
            type: Sequelize.STRING
        },
        apiVersion: {
            type: Sequelize.STRING
        },
    });

    return Sms;
};