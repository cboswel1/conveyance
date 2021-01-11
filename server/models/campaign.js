module.exports = (sequelize, Sequelize) => {
    const Campaign = sequelize.define("campaigns", {
        title: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.STRING
        },
        dateSent: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    return Campaign;
};