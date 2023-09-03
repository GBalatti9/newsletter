module.exports = (sequelize, dataTypes) => {

    let alias = 'WriterSuscriber';

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER,
        },
        writer_id: {
            foreignKey: true,
            type: dataTypes.INTEGER,
        },
        suscriber_id: {
            foreignKey: true,
            type: dataTypes.INTEGER,
        },
    }

    let config = {
        tableName: 'writers_suscribers',
        timestamps: false,
    }

    let WriterSuscriber = sequelize.define(alias, cols, config);
    return WriterSuscriber;
}