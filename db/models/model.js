module.exports = (sequelize, dataTypes) => {
    const alias = 'Models'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        model: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },

        maker_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
 
    }

    const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let Models = sequelize.define(alias,cols,config)

    return Models;
}