//Import bcrypt package for password hashing (using bcryptjs version may cause errors on Windows machine sometimes)

// const bcrypt = require("bcryptjs");

//Create Host Model and export the module

module.exports = (sequelize, DataTypes) => {
    //Create a Host model
    const TextContent = sequelize.define("textContent", {
        //Set email attribute. check for valid email format and email cannot be null
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        //Password cannot be null
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // eslint-disable-next-line camelcase
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, 
        {
            freezeTableName: true,
            tableName: "text_content"
        }
    );

    //Create a custom method for Host Model.
    // Check if the unhashed password entered by the host matches any hashed password stored in the database
    // Host.prototype.validPassword = function (password) {
    //     //bcrypt.compareSync() returns true or false
    //     return bcrypt.compareSync(password, this.password);
    // };

    //Hooks (also known as callbacks or lifecycle events), are functions which are called before and after calls in sequelize are executed. They run during various phases of the Host Model lifecycle
    //Here before a host is created, hooks will automatically hash hosts password
    // Host.addHook("beforeCreate", (host) => {
    //     host.password = bcrypt.hashSync(host.password, bcrypt.genSaltSync(10), null);
    // });
    
    //Set up Model/table association (one host has only one booking)
    // Host.associate = function(models) {
    //     Host.hasOne(models.Booking, {
    //         foreignKey: "host_id",
    //     });
    // };

    //after hashing password, return Host Model
    return TextContent;
};
