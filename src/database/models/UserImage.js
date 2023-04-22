module.exports = (sequelize, dataTypes) => {
    const alias = 'UserImages'
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
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    }
     const config = {
        timestamps: false,
        underscore: true
    }

    let UserImage = sequelize.define(alias,cols,config)

    UserImage.associate = function (models) {
        UserImage.belongsTo(models.Users, {
            as: 'UserImage',
            foreignKey: 'user_id'
        })
    }

    return UserImage;
}
        