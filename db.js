const Sequelize = require('sequelize');
const sequelize = new Sequelize('templo-betel', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('Connected to worklog postgres database');
    },
    function (err) {
        console.log(err);
    }
);
module.exports = sequelize;