module.exports = (sequelize, dataTypes) => {
    const alias = 'Brands'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        brand: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

 
    }

    const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let Brand = sequelize.define(alias,cols,config)

    Brand.associate = function(models) {
        Brand.hasMany(models.Models, {
            as: 'models',
            foreignKey: 'model_id'
        });
    }
    return Makers;
}