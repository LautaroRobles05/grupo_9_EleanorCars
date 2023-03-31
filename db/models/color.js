module.exports = (sequelize, dataTypes) => {
    const alias = 'Colors'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        color: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },

 
    }

    const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let Colors = sequelize.define(alias,cols,config)

    return Colors;
}