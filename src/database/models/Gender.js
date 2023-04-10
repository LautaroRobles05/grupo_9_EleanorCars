module.exports = (sequelize, dataTypes) => {
    const alias = 'Genders'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
        },
    }
     const config = {
        timestamps: true,
        updatedAt: false,
        paranoid: true,
        underscore: true
    }

    let Gender = sequelize.define(alias,cols,config)

    Gender.associate = function (models) {
        Gender.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'gender_id'
        })
    }

    return Gender;
}
        