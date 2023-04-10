module.exports = (sequelize, dataTypes) => {
    const alias = 'Brands'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: {
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

    let Brand = sequelize.define(alias,cols,config)

    Brand.associate = function(models) {
        Brand.hasMany(models.CarModels, {
            as: 'models',
            foreignKey: 'brand_id'
        });
    }
    
    return Brand;
}