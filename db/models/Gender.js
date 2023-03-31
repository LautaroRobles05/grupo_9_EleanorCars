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
            type: dataTypes.STRING(50),
        },
    }
     const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let Genders = sequelize.define(alias,cols,config)

    Gender.associate = function (models) {
        Gender.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'gender_id'
        })
    }

    return Genders;
}
        