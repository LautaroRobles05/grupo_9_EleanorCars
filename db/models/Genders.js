module.exports = (sequelize, dataTypes) => {
    const alias = 'Genders'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        gender: {
            type: dataTypes.VARCHAR(50),
        },
    }
     const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let Genders = sequelize.define(alias,cols,config)

    return Genders;
}
        