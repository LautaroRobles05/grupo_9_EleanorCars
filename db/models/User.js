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
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },

        lastName: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        
        email: {
            type: dataTypes.VARCHAR(100),
            allowNull: false,
            unique: true
        },

        password: {
            type: dataTypes.VARCHAR(50),
            allowNull: false,
        },

        nickName: {
            type: dataTypes.VARCHAR(50),
            allowNull: false,
            unique: true
        },

        rol_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        img: dataTypes.VARCHAR(100),

        gender_id: dataTypes.INTEGER,

        phone: dataTypes.VARCHAR(50),
    
        dni: dataTypes.INTEGER,

        bornDate: dataTypes.DATE,

        state_id: dataTypes.INTEGER, //A CHEQUEAR...
 
    }

    const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let User = sequelize.define(alias,cols,config)

    return User;
}

