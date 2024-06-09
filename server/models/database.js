const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false, // يمكنك تفعيل السجل إذا أردت
    dialectOptions: {
        ssl: {
            require: true, // هذه الخيارات قد تحتاجها إذا كنت تستخدم اتصال آمن (SSL)
            rejectUnauthorized: false // تأكد من إعدادات SSL الخاصة بك
        }
    }
}); 

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database: ', err);
});

module.exports = db;
