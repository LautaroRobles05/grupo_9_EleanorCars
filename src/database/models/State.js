module.exports = (sequelize, dataTypes) => {
    const alias = 'States'
    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        state: {
            type: dataTypes.STRING(50),
        },
        country_id: {
            type: dataTypes.INTEGER,
        },
    }

        const config = {
        timestamps: false,
        paranoid: true,
        underscore: true
    }

    let State = sequelize.define(alias,cols,config)

    State.associate = function (models) {
        State.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'state_id'
        });
    }
    return State;
}