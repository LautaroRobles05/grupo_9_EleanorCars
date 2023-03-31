module.exports = (sequelize, dataTypes) => {
    const alias = 'Makers'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        maker: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },

 
    }

    const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let Makers = sequelize.define(alias,cols,config)

    return Makers;
}