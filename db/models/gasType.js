module.exports = (sequelize, dataTypes) => {
    const alias = 'GasType'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        tipo: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },

 
    }

    const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let GasType = sequelize.define(alias,cols,config)

    return GasType;
}