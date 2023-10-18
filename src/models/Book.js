module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('Book', {
        title: DataTypes.STRING,
        auther: DataTypes.STRING,
        total_page: DataTypes.INT,
        publisher:  DataTypes.STRING,
        category:  DataTypes.STRING,
        price :  DataTypes.FLOAT,
    })
    return Noodle
}


