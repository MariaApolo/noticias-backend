const Sequelize = require('sequelize');

const OutputModel = require('./models/outputs')
const EtiquetaModel = require('./models/etiquetas')
const UserModel = require('./models/users')

const sequelize = new Sequelize('gene', 'root', '3e19746cda', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const Output = OutputModel(sequelize, Sequelize);
const Etiqueta = EtiquetaModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false})
    .then(()=> //promesa
    console.log('tablas sincronizadas')) 

module.exports = {
    Output,
    Etiqueta,
    User
}