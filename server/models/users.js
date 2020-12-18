const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                len: [1,255]
            },
        },
        //Password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // eslint-disable-next-line camelcase
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,255]
            }
        },
        // eslint-disable-next-line camelcase
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,255]
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [10,10]
            }
        },
    },
        {
            freezeTableName: true,
            tableName: "users"
        }
    );

    //Create a custom method for Host Model.
    // Check if the unhashed password entered by the host matches any hashed password stored in the database
    Users.prototype.validPassword = function (password) {
        //bcrypt.compareSync() returns true or false
        return bcrypt.compareSync(password, this.password);
    };

    Users.addHook("beforeCreate", (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    //after hashing password, return Host Model
    return Users;
};
