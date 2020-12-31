module.exports = (sequelize, DataTypes) => {
    const Recording = sequelize.define('record', {
        description: {
            type: DataTypes.STRING(40000),
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        audio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        video: {
            type:DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Recording;
}