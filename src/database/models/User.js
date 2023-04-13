module.exports = (sequelize, dataTypes) => {
    const alias = 'Users'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
            },

        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },

        lastName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },

        password: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },

        nickname: {
            type: dataTypes.STRING(50),
            allowNull: false,
            unique: true
        },

        rol_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        img: dataTypes.STRING(100),

        gender_id: dataTypes.INTEGER,

        phone: dataTypes.STRING(50),
    
        dni: dataTypes.INTEGER,

        bornDate: dataTypes.DATEONLY,

        state_id: dataTypes.INTEGER, //A CHEQUEAR...
 
    }

    const config = {
        timestamps: true,
        updatedAt: false,
        paranoid: true,
        underscore: true
    }

    let User = sequelize.define(alias,cols,config)

    User.associate = function (models) {
        User.belongsTo(models.Roles, {
            as: 'role',
            foreignKey: 'rol_id'
        });
        User.belongsTo(models.States, {
            as: 'state',
            foreignKey: 'state_id'
        });
        User.belongsTo(models.Genders, {
            as: 'gender',
            foreignKey: 'gender_id'
        });

        
    }

    return User;
}

