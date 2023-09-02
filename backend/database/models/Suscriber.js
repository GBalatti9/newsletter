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
        },
        created_at: {
            type: dataTypes.DATE,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    }

    let config = {
        tablename: 'suscribers',
        createdAt: 'created_at', 
        updatedAt: false, 
    }

    const Suscriber = sequelize.define(alias, cols, config);
    return Suscriber;
}