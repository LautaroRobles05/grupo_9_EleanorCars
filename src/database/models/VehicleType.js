module.exports = (sequelize, dataTypes) => {
    const alias = 'VehicleTypes'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        tipo: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

 
    }

    const config = {
        timestamps: true,
        updatedAt: false,
        paranoid: true,
        underscore: true
    }

    let VehicleType = sequelize.define(alias,cols,config)

    VehicleType.associate = function(models) {
        VehicleType.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'vehicleType_id'
        })
    }

    return VehicleType;
}