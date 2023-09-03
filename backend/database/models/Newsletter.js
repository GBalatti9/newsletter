module.exports = (sequelize, dataTypes) => {

    let alias = 'Newsletter';

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        id_user_creator: {
            foreignKey: true,
            type: dataTypes.INTEGER
        },
        content: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: 'newsletters_content',
        created_at: true,
        updated_at: false,
    }

    let Newsletter = sequelize.define(alias, cols, config);
    return Newsletter;
}