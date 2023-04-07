
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
        type: DataTypes.DATE,
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
        
        //img: DataTypes.STRING(100),

        // manufacturingYear: DataTypes.DATE,
        
        manufacturingYear: {
            type: DataTypes.DATE,
            allowNull: true
        },

        transmission: DataTypes.INTEGER,
        
        equipment: DataTypes.STRING(500),

        createdAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
        
    }

    const config = {
        timestamps: true,
        updatedAt: false,
        paranoid: true,
        updatedAt: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.VehicleTypes, {
            as: 'vehicleType',
            foreignKey: 'vehicleType_id'
        });
        Product.belongsTo(models.CarModels, {
            as: 'model',
            foreignKey: 'model_id'
        });
        Product.belongsTo(models.GasTypes, {
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