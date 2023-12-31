module.exports = (sequelize, dataTypes) => {

    let alias = 'Writer';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING,
        },
        last_name: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: 'writers',
        timestamps: false
    }

    const Writer = sequelize.define(alias, cols, config);

    Writer.associate = function(models) {
        Writer.belongsToMany(models.Suscriber, {
            as: 'suscriptores',
            through: 'WriterSuscriber',
            foreignKey: 'writer_id',
            otherKey: 'suscriber_id',
        })
    }

    return Writer;
}