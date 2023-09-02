module.exports = (sequelize, dataTypes) => {

    let alias = 'Suscriber';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: dataTypes.STRING,
        }
    }

    let config = {
        tablename: 'suscribers'
    }

    const Suscriber = sequelize.define(alias, cols, config);
    return Suscriber;
}