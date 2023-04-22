module.exports = (sequelize, dataTypes) => {
    const alias = 'Roles'
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

    let Role = sequelize.define(alias,cols,config)

    Role.associate = function (models) {
        Role.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'rol_id'
        })
    }

    return Role;
}

    