module.exports = (sequelize, dataTypes) => {
    const alias = 'Countrys'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(50),
        },
    }
     const config = {
        timestamps: true,
        updatedAt: false,
        paranoid: true,
        underscore: true
    }

    let Countrys = sequelize.define(alias,cols,config)

    return Countrys;
}
        