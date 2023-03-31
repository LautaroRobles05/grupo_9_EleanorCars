
module.exports = (sequelize, DataTypes) => {
    const alias = "Products";

    const cols = {

       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },

       model_id: {
        type: DataTypes.INTEGER,
        allowNull: false
       },

       year: {
        type: DataTypes.DATEONLY,
        allowNull: false
       },

       km: {
        type: DataTypes.INTEGER,
        allowNull: false
       },

       color_id: {
        type: DataTypes.INTEGER,
        allowNull: false
       },

       doors: {
        type: DataTypes.INTEGER,
        allowNull: false
       },

       price: {
        type: DataTypes.INTEGER,
        allowNull: false
       },

       
       vehicleType_id: {
           type: DataTypes.INTEGER,
           allowNull: false
        },
        
        gasType_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        img: DataTypes.STRING(100),

        manufacturingYear: DataTypes.DATEONLY,
        
        transmission: DataTypes.INTEGER,
        
        equipment: DataTypes.STRING(500)
       
    }

    const config = {
        timestamps: true,
        underscored: true,
        paranoid: true
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.VehicleTypes, {
            as: 'vehicleType',
            foreignKey: 'vehicleType_id'
        });
        Product.belongsTo(models.Models, {
            as: 'model',
            foreignKey: 'model_id'
        });
        Product.belongsTo(models.gasTypes, {
            as: 'gasType',
            foreignKey: 'gasType_id'
        });
        Product.belongsTo(models.Colors, {
            as: 'color',
            foreignKey: 'color_id'
        });
    }

    return Product;
}