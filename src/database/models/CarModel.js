module.exports = (sequelize, dataTypes) => {
    const alias = 'CarModels'
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

        brand_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        description: {
            type : dataTypes.STRING(500)
        }
 
    }

    const config = {
        timestamps: true,
        updatedAt: false,
        paranoid: true,
        underscore: true
    }

    let CarModel = sequelize.define(alias,cols,config)

    CarModel.associate = function(models) {
        CarModel.hasMany(models.Products, {
            as: 'modelProducts',
            foreignKey: 'model_id'
        });

        CarModel.belongsTo(models.Brands, {
            as: 'brand',
            foreignKey: 'brand_id'
        });
    }
    return CarModel;
}