
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
        
        img: DataTypes.VARCHAR(100),

        manufacturingYear: DataTypes.DATE,
        
        transmission: DataTypes.INTEGER,
        
        equipment: DataTypes.VARCHAR(500)
       
    }

    const config = {
        timestamps: true,
        underscored: true,
        paranoid: true
    }

    let Product = sequelize.define(alias, cols, config);

    return Product;
}