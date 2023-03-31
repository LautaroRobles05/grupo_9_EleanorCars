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
            type: dataTypes.STRING(50),
            allowNull: false
        },

        brand_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
 
    }

    const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let Model = sequelize.define(alias,cols,config)

    Model.associate = function(models) {
        Model.hasMany(models.Products, {
            as: 'modelProducts',
            foreignKey: 'model_id'
        });
        Model.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'brand_id'
        });
    }
    return Models;
}