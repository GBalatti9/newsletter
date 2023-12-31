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
            type: dataTypes.DATE,
            allowNull: true,
            field: 'created_at',
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
            field: 'release_date'
        },
        send: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: 'newsletters_content',
        timestamps: false,
    }

    let Newsletter = sequelize.define(alias, cols, config);
    return Newsletter;
}