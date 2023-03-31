module.exports = (sequelize, dataTypes) => {
    const alias = 'VehicleType'
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

    let VehicleType = sequelize.define(alias,cols,config)

    return VehicleType;
}