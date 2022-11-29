module.exports = (sequelize, type) => {
    return sequelize.define('output', {
        id_output:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:  true,
        },
        sentence1: type.STRING,
        sentence2: type.STRING,
        model_out: type.BOOLEAN,
        real_out: type.BOOLEAN,
        status: type.BOOLEAN,

    })

}