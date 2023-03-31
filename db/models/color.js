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
            type: dataTypes.STRING(50),
            allowNull: false
        },

        value: {
            type: dataTypes.STRING,
            allowNull: false
        }

 
    }

    const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let Color = sequelize.define(alias,cols,config)

    Color.associate = function(models) {
        Color.hasMany(models.Products, {
            as: 'colorProduct',
            foreignKey: 'color_id'
        });
    } 
    return Colors;
}