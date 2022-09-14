module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id_user:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:  true,
        },
        nombre: type.STRING,
        email:type.STRING,
        pass: type.STRING,

    })

}