module.exports = (sequelize, DataTypes) => {
    const CreateProducts = sequelize.define("CreateProducts", {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return CreateProducts;
  };
  