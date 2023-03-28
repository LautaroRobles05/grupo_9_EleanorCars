module.exports = (sequelize, dataTypes) => {
    const alias = 'Roles'
    const cols = {
         id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
          role: {
            type: dataTypes.VARCHAR(50),
        },
          
    }
       const config = {
        timestamps: true,
        paranoid: true,
        underscore: true
    }

    let Roles = sequelize.define(alias,cols,config)

    return Roles;
}

    