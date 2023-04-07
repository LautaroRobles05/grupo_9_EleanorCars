module.exports = (sequelize, dataTypes) => {
    const alias = 'GasTypes'
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

    let GasType = sequelize.define(alias,cols,config)

    GasType.associate = function(models) {
        GasType.hasMany(models.Products, {
            as: 'productGasType',
            foreignKey: 'gasType_id'
        });
    }
    return GasType;
}