const Sequelize = require('sequelize');

const OutputModel = require('./models/outputs')
const EtiquetaModel = require('./models/etiquetas')
const UserModel = require('./models/users')
const CommentModel = require('./models/comments')


/*
const sequelize = new Sequelize('gene', 'root', '3e19746cda', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
*/
/*database, username, password */





const sequelize = new Sequelize('noticias', 'noticias', '3e19746cda', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});


const Output = OutputModel(sequelize, Sequelize);
const Etiqueta = EtiquetaModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);

sequelize.sync({ force: true})
    .then(()=> //promesa
    console.log('tablas sincronizadas')) 

module.exports = {
    Output,
    Etiqueta,
    User,
    Comment
}