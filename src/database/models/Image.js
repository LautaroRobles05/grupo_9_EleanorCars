module.exports = (sequelize, dataTypes) => {
    const alias = 'Images'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(255),

        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        hierarchy:{
            type: dataTypes.INTEGER
        }
    }
     const config = {
        timestamps: false,
        underscore: true
    }

    let Image = sequelize.define(alias,cols,config)

    Image.associate = function (models) {
        Image.belongsTo(models.Products, {
            as: 'imageProduct',
            foreignKey: 'product_id'
        })
    }

    return Image;
}
        