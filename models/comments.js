module.exports = (sequelize, type) => {
    return sequelize.define('comment', {
        id_comment:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:  true,
        },
        id_user: type.INTEGER,
        comment_text: type.STRING,

    })

}