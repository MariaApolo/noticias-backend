module.exports = (sequelize, type) => {
    return sequelize.define('etiqueta', {
        id_etiqueta:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:  true,
        },
        id_output: type.INTEGER,

        id_user: type.INTEGER,

        value: type.STRING,
        s1_highlight: type.JSON,
        s2_highlight: type.JSON,
        confidence: type.INTEGER, 

    })

}