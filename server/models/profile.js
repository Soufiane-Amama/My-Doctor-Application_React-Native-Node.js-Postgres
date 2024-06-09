const {Sequelize} = require('sequelize')
const db = require('./database')


const Profile = db.define('profile', {
    specialization: {
        type: Sequelize.DataTypes.STRING,
    },
    address: {
        type: Sequelize.DataTypes.STRING,
    },
    workingHours: {
        type: Sequelize.DataTypes.STRING,
    },
    phone: {
        type: Sequelize.DataTypes.STRING,
    }
})

Profile.associate = models => {
    Profile.belongsTo(models.User)
}

module.exports = Profile;